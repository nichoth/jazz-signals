import { render } from 'preact'
import './state.js'

function Example () {
    return (<div>hello</div>)
}

render((<Example />), document.getElementById('root')!)
