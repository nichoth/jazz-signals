import { JSX, render } from 'preact'
import { Primary as BtnPrimary } from './components/button.js'
import { useState, useMemo } from 'preact/hooks'
import { computed, effect, signal, Signal, useSignal } from '@preact/signals'
import { LocalNode } from 'cojson'
import { ResolvedAccount } from 'jazz-autosub'
import { TextInput } from './components/text-input.js'
import { ReadyStatus, createLocalAuth, createLocalNode } from '../src/index.js'
import { autoSub } from '../src/auto-sub.js'
import './index.css'

const { authProvider, authStatus } = createLocalAuth({ appName: 'test' })

console.log('status... ', authStatus.value)

// const localNode:Signal<Promise<LocalNode|undefined>> = computed(async () => {
//     return (await createLocalNode({ auth: authProvider })).node
// })

// const localNode = (await createLocalNode({ auth: authProvider })).node

// const sub = signal<ResolvedAccount|null>(null)

// effect(async () => {
//     const node = await localNode.value
//     if (!node) {
//         console.log('boo')
//     }

//     const unsubscribe = autoSub('me', node as LocalNode, (resolved:ResolvedAccount) => {
//         console.log('**resolved**', resolved)
//         sub.value = resolved
//     })
// })

// @ts-ignore
// window.node = localNode
// @ts-ignore
window.authStatus = authStatus

interface FormControls extends HTMLFormControlsCollection {
    username: HTMLInputElement;
}

/**
 * How to see my own profile?
 */

function Example () {
    // const subscription = useMemo(() => sub, [])

    // const subscription = useMemo<Signal<null|ResolvedAccount>>(() => {
    //     return autoSub(localNode)
    // }, [])

    // console.log('render', subscription.value)

    return (<div className="jazz-signals-example">
        {(authStatus.value.status === 'signedIn' ?
            (<div>
                <span>is me?</span>
                {/* <code>{subscription.value && subscription.value.isMe}</code> */}
            </div>) :
            <LoginPage />
        )}
    </div>)
}

render((<Example />), document.getElementById('root')!)

function LoginPage () {
    const [state, setState] = useState<null|'register'>(null)

    function login (ev:MouseEvent) {
        ev.preventDefault();
        (authStatus.value as ReadyStatus).logIn()
        console.log('login')
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
