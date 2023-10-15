import { render } from 'preact'
import { Primary as BtnPrimary } from './components/button.js'
import { createLocalAuth, createLocalNode } from '../src/index.js'
import './index.css'

const localAuth = createLocalAuth({ appName: 'test' })
const localNode = await createLocalNode({ auth: localAuth.authProvider })

console.log('local node', localNode)

function Example () {
    function login (ev:MouseEvent) {
        ev.preventDefault()
        console.log('login')
    }

    function register (ev:MouseEvent) {
        ev.preventDefault()
        console.log('register')
    }

    return (<div className="jazz-signals-example">
        hello

        <div className="login-controls">
            <BtnPrimary onClick={login} className="primary">
                Login
            </BtnPrimary>

            <BtnPrimary className="signup" onClick={register}>
                Register
            </BtnPrimary>
        </div>
    </div>)
}

render((<Example />), document.getElementById('root')!)
