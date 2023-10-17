import { FunctionComponent } from 'preact'
import { useCallback, useState } from 'preact/hooks'
import { TextInput } from './text-input.jsx'
import { Primary as BtnPrimary, Button } from './button.jsx'

export const SubmittableInput:FunctionComponent<{
    onSubmit: (text: string) => any;
    displayName:string;
    disabled?: boolean;
    minLength?: number;
    action:string;
    primary?:boolean;
}> = function SubmittableInput (props) {
    const { primary, disabled, onSubmit, displayName, action, minLength } = props
    const [isValid, setValid] = useState(false)

    const handleSubmit = useCallback(function handleSubmit (ev) {
        ev.preventDefault()
        const textEl = ev.target.elements.namedItem(
            'text'
        ) as HTMLInputElement

        onSubmit(textEl.value)
        textEl.value = ''
        setValid(false)
    }, [onSubmit])

    function handleInput (ev) {
        const form = ev.target
        const isOk = form.checkValidity()
        if (isOk !== isValid) setValid(isOk)
    }

    // need this because `onInput` event doesnt work for cmd + delete event
    async function onFormKeydown (ev:KeyboardEvent) {
        const key = ev.key
        const { form } = ev.target as HTMLInputElement
        if (!form) return
        if (key !== 'Backspace' && key !== 'Delete') return

        const _isValid = (form.checkValidity())
        if (_isValid !== isValid) setValid(_isValid)
    }

    return (
        <form
            className="submittable-input"
            onKeyDown={onFormKeydown}
            onSubmit={handleSubmit}
            onInput={handleInput}
        >
            <TextInput
                className="submittable-input"
                displayName={displayName}
                name="text"
                minLength={minLength}
                required={true}
            />

            {primary ?
                (<BtnPrimary
                    type="submit"
                    disabled={disabled || !isValid}
                    isSpinning={false}
                >
                    {action}
                </BtnPrimary>) :
                (<Button disabled={disabled || !isValid} type="submit"
                    isSpinning={false}
                >
                    {action}
                </Button>)
            }
        </form>
    )
}
