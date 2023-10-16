import { JSX, render } from 'preact'
import { Primary as BtnPrimary } from './components/button.js'
import { useState, useMemo } from 'preact/hooks'
import { effect, signal, Signal } from '@preact/signals'
import { LocalNode } from 'cojson'
import { ResolvedAccount } from 'jazz-autosub'
import { TextInput } from './components/text-input.js'
import { ReadyStatus, createLocalAuth, createLocalNode } from '../src/index.js'
import { profile } from '../src/auto-sub.js'
import './index.css'

const { authProvider, authStatus } = createLocalAuth({ appName: 'test' })

const localNode = signal<LocalNode|null>(null)

effect(async () => {
    console.log('auth status...', authStatus.value)
    if (authStatus.value.status !== null) return
    localNode.value = (await createLocalNode({
        auth: authProvider,
        authStatus
    })).node
})

// @ts-ignore
window.node = localNode
// @ts-ignore
window.authStatus = authStatus

interface FormControls extends HTMLFormControlsCollection {
    username: HTMLInputElement;
}

function Example () {
    /* eslint-disable */
    const { profile: myProfile } = useMemo<{
        profile:Signal<null|ResolvedAccount>;
        unsubscribe:()=>void;
    }>(() => {
        return profile(localNode.value)
    }, [localNode.value])
    /* eslint-enable */

    // @ts-ignore
    window.myProfile = myProfile
    console.log('profile', myProfile.value)

    return (<div className="jazz-signals-example">
        {(authStatus.value.status === 'signedIn' ?
            (<div>
                <div>
                    you are
                    <strong>{' ' + myProfile.value?.profile?.name}</strong>
                </div>
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
        const username = ((elements as FormControls).username).value
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
