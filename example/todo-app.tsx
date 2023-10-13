import { FunctionComponent } from 'preact'
import { useMemo } from 'preact/hooks'
import Router from './router.jsx'
import { State } from './state.js'
import { signedIn } from './util.js'

export const TodoApp:FunctionComponent<{
    state:Awaited<ReturnType<typeof State>>
}> = function TodoApp (props) {
    const { state } = props
    const { node, authStatus } = state

    const router = useMemo(() => Router(), [])
    const match = router.match(state.routeState.value)
    const Element = match.action(match)

    const isSignedIn = useMemo(() => {
        return signedIn(authStatus.value, node)
    }, [authStatus.value, node])

    if (!isSignedIn) {
        return (<div class="todo-app not-signed-in">
            <button onClick={() => State.redirectToLogin(state)}>
                Sign in
            </button>
        </div>)
    }

    return (<div className="todo-app">
        <p>todo todo...</p>
        <Element {...props} />
    </div>)
}
