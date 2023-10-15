import { FunctionComponent, JSX } from 'preact'
import './button.css'

interface ButtonProps extends JSX.HTMLAttributes {
    isSpinning?: boolean,
    className?: string,
    onClick?: (MouseEvent) => any
}

export const Button:FunctionComponent<ButtonProps> = function (props) {
    const { className, ..._props } = props

    return (<button {..._props} className={createClass('btn', className)}>
        {props.children}
    </button>)
}

export const Primary:FunctionComponent<ButtonProps> = function (props) {
    const { className, ..._props } = props

    return (<button {..._props} className={createClass('btn primary', className)}>
        {props.children}
    </button>)
}

function createClass (defaultClass:string, propsClass?:string):string {
    return (propsClass ?
        (defaultClass + ' ' + propsClass) :
        defaultClass
    )
}
