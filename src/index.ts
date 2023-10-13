import { createBrowserNode } from 'jazz-browser'
import { Signal, signal } from '@preact/signals'
import { BrowserLocalAuth } from 'jazz-browser-auth-local'
import { LocalNode } from 'cojson'

export type LoadingStatus = { status: 'loading' }
export type ReadyStatus = {
    status: 'ready';
    logIn: () => Promise<void>;
    signUp: (username:string) => Promise<void>;
}
export type SignedInStatus = {
    status: 'signedIn';
    logOut: () => void;
}
export type AuthStatus = { status:null } |
    LoadingStatus |
    ReadyStatus |
    SignedInStatus

export function createAuthStatus ():Signal<AuthStatus> {
    return signal({ status: null })
}

export async function createLocalNode ({
    authStatus,
    appName,
    appHostname,
    syncAddress,
}:{
    authStatus:Signal<AuthStatus>;
    appName:string;
    appHostname?:string;
    syncAddress?:string;
}):Promise<{ done:()=>void, node:LocalNode }> {
    const logoutCount = signal<number>(0)

    const localAuthObj = new BrowserLocalAuth(
        {
            onReady (next) {
                authStatus.value = {
                    status: 'ready',
                    logIn: next.logIn,
                    signUp: next.signUp,
                }
            },

            onSignedIn (next) {
                authStatus.value = {
                    status: 'signedIn',
                    logOut: () => {
                        next.logOut()
                        authStatus.value = { status: 'loading' }
                        logoutCount.value = (logoutCount.value + 1)
                    },
                }
            },
        },

        appName,
        appHostname
    )

    let _done:(() => void) = done

    const nodeHandle = await createBrowserNode({
        auth: localAuthObj,
        syncAddress
    })

    _done = nodeHandle.done

    function done () {
        if (!_done) throw new Error('Called `done` before it exists')
        _done()
    }

    return { done, node: nodeHandle.node }
}
