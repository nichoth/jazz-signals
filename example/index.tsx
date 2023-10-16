import { JSX, render } from 'preact'
import { Primary as BtnPrimary } from './components/button.js'
import { useState, useMemo } from 'preact/hooks'
import { TextInput } from './components/text-input.js'
import { State } from './state.js'
import { ReadyStatus } from '../src/index.js'
import { profile as getProfile } from '../src/auto-sub.js'
import Router from './routes/index.jsx'
import './index.css'

const router = Router()
const state = State()
const { localNode: node, authStatus } = state

function Example () {
    const { profile } = useMemo(() => {
        return getProfile(node.value)
    }, [node.value])

    // @ts-ignore
    window.profile = profile

    console.log('render', profile.value)

    const match = router.match(state.route.value)
    if (!match) {
        return (<div className="404">
            Four Oh Four
        </div>)
    }

    const ChildNode = match.action(match, state.route)

    return (<div className="jazz-signals-example">
        {(authStatus.value.status === 'signedIn' ?
            (<div>
                <div>
                    you are
                    <strong>{' ' + profile.value?.profile?.name}</strong>
                </div>

                <ChildNode state={state} params={match.params} />
            </div>) :
            <LoginPage />
        )}
    </div>)
}

render((<Example />), document.getElementById('root')!)

function LoginPage () {
    const [state, setState] = useState<null|'register'>(null)

    function login (ev:MouseEvent) {
        ev.preventDefault()
        console.log('login');
        (authStatus.value as ReadyStatus).logIn()
    }

    function register (ev:MouseEvent) {
        ev.preventDefault()
        setState('register')
    }

    function createAccount (ev:JSX.TargetedEvent) {
        ev.preventDefault()
        const { elements } = (ev.target as HTMLFormElement)
        const username = (elements.namedItem('username') as HTMLInputElement).value
        console.log('create account', username);
        (authStatus.value as ReadyStatus).signUp(username)
    }

    return (<div className="login">
        {(state === null ?
            (<div className="login-controls">
                <BtnPrimary onClick={login} className="primary">
                    Login
                </BtnPrimary>

                <BtnPrimary className="signup" onClick={register}>
                    Register
                </BtnPrimary>
            </div>) :

            (<form className="register" onSubmit={createAccount}>
                <TextInput displayName="username" name="username" />
                <BtnPrimary type="submit">Create account</BtnPrimary>
            </form>)
        )}
    </div>)
}
