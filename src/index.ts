import { createBrowserNode, AuthProvider } from 'jazz-browser'
import { Signal, signal, effect } from '@preact/signals'
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
}):{
    done:()=>void,
    node:Signal<null|LocalNode>
} {
    const nodeSignal:Signal<null|LocalNode> = signal(null)
    const _done:(() => void) = done

    effect(async () => {
        if (authStatus.value.status !== null) return
        nodeSignal.value = (await createBrowserNode({
            auth,
            syncAddress
        })).node
    })

    function done () {
        if (!_done) throw new Error('Called `done` before it exists')
        _done()
    }

    return { done, node: nodeSignal }
}
