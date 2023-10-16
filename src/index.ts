import { createBrowserNode, AuthProvider } from 'jazz-browser'
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

export function createLocalAuth ({
    appName,
    appHostname
}:{
    appName:string;
    appHostname?:string;
}):{ authProvider:AuthProvider, authStatus:Signal<AuthStatus> } {
    const authStatus:Signal<AuthStatus> = signal({ status: null })
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

    return { authProvider: localAuthObj, authStatus }
}

export function createLocalNode ({
    auth,
    syncAddress,
    authStatus
}:{
    auth:AuthProvider;
    syncAddress?:string;
    authStatus:Signal<AuthStatus>
}):Signal<{ done:()=>void, node:null|LocalNode }> {
    const sig:Signal<{
        done:()=>void,
        node:null|LocalNode
    }> = signal({ done, node: null })

    let _done:(() => void) = done

    if (authStatus.value.status !== null) {
        return sig
    }

    (async () => {
        const nodeHandle = await createBrowserNode({
            auth,
            syncAddress
        })

        sig.value = { node: nodeHandle.node, done }

        _done = nodeHandle.done
    })()

    function done () {
        if (!_done) throw new Error('Called `done` before it exists')
        _done()
    }

    // return { done, node: nodeHandle.node }
    return sig
}
