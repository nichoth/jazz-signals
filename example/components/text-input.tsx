import { FunctionComponent, JSX } from 'preact'
import './text-input.css'

interface InputProps extends JSX.HTMLAttributes {
    displayName: string;
    className?: string;
}

export const TextInput:FunctionComponent<InputProps> = function (props) {
    const { name } = props
    const { displayName, ..._props } = props

    return (<div className={'input-group ' + {name}}>
        <input {..._props} name={name} type={props.type || 'text'}
            placeholder=" " required={props.required}
            minLength={props.minlength || props.minLength}
            maxLength={props.maxlength || props.maxLength}
            id={name}
        />
        <label htmlFor={name}>{displayName}</label>
    </div>)
}
