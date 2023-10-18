import { createBrowserNode, AuthProvider } from 'jazz-browser'
import { Signal, signal, effect } from '@preact/signals'
import { BrowserLocalAuth } from 'jazz-browser-auth-local'
import {
    Profile,
    LocalNode,
    CoID,
    CoValue,
    CoMap,
    Account,
    AccountMeta
} from 'cojson'
import { ResolvedAccount, Resolved, autoSub } from 'jazz-autosub'

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
}):{
    authProvider:AuthProvider;
    authStatus:Signal<AuthStatus>;
    logoutCount:Signal<number>;
} {
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

    return { authProvider: localAuthObj, authStatus, logoutCount }
}

export function createLocalNode ({
    auth,
    syncAddress,
    authStatus,
    logoutCount
}:{
    auth:AuthProvider;
    syncAddress?:string;
    authStatus:Signal<AuthStatus>
    logoutCount:Signal<number>
}):{
    done:()=>void,
    node:Signal<null|LocalNode>
} {
    const nodeSignal:Signal<null|LocalNode> = signal(null)
    let _done:(() => void)

    let count = logoutCount.peek()

    effect(async () => {
        if (logoutCount.value > count) {
            // create a new node if you log out
            count = logoutCount.value
            done()
            const nodeHandle = await createBrowserNode({ auth, syncAddress })
            nodeSignal.value = nodeHandle.node
            _done = nodeHandle.done
            return
        }

        // only create a localNode if there is no authStatus
        // NOTE you *must* create a localNode before the authStatus will change
        //   to 'ready'
        if (authStatus.value.status !== null) return

        // there is not an authStatus, so create a node

        const nodeHandle = await createBrowserNode({
            auth,
            syncAddress
        })

        nodeSignal.value = nodeHandle.node
        _done = nodeHandle.done
    })

    function done () {
        if (!_done) throw new Error('Called `done` before it exists')
        _done()
    }

    return { done, node: nodeSignal }
}

export function telepathicSignal<T extends CoValue> ({
    id,
    node
}:{
    id:CoID<T>
    node:LocalNode
}):[Signal<Resolved<T>|null>, ()=>void] {
    const state:Signal<Resolved<T>|null> = signal(null)

    const unsubscribe = autoSub(id, node, (data:Resolved<T>) => {
        state.value = data
    })

    return [state, unsubscribe]
}

/**
 * Get your profile
 */
export function profile<
    P extends Profile = Profile,
    T extends CoMap = CoMap,
    Meta extends AccountMeta = AccountMeta
> (node:Signal<LocalNode|null>):{
    profile:Signal<null|ResolvedAccount<Account<P, T, Meta>>>;
    unsubscribe:()=>void
} {
    const profile:Signal<null|ResolvedAccount<Account<P, T, Meta>>> = signal(null)
    let _unsubscribe = () => {}

    const dispose = effect(() => {
        if (!node.value) return

        _unsubscribe = autoSub('me', node.value, (resolved:ResolvedAccount) => {
            profile.value = resolved as ResolvedAccount<Account<P, T, Meta>>
        })
    })

    function unsubscribe () {
        _unsubscribe()
        dispose()
    }

    return { profile, unsubscribe }
}
