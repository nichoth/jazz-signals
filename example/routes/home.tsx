import { FunctionComponent, JSX } from 'preact'
import { TextInput } from '../components/text-input.js'
import { State, createList } from '../state.js'
import { Primary as BtnPrimary } from '../components/button.js'
import { useState } from 'preact/hooks'

export const Home:FunctionComponent<{
    state:ReturnType<typeof State>
}> = function ({ state }) {
    const { profile } = state

    const [isListNameValid, setValid] = useState<boolean>(false)

    function handleSubmit (ev:JSX.TargetedEvent) {
        ev.preventDefault()
        const { elements } = (ev.target as HTMLFormElement)
        const listName = (elements.namedItem('list-name') as HTMLInputElement).value
        createList(state, { name: listName })
    }

    function handleInput (ev) {
        const form = ev.target
        const isOk = form.checkValidity()
        if (isOk !== isListNameValid) setValid(isOk)
    }

    // need this because `onInput` event doesnt work for cmd + delete event
    async function onFormKeydown (ev:KeyboardEvent) {
        const key = ev.key
        const { form } = ev.target as HTMLFormElement
        if (!form) return
        if (key !== 'Backspace' && key !== 'Delete') return

        const _isValid = (form.checkValidity())
        if (_isValid !== isListNameValid) setValid(_isValid)
    }

    console.log('root...', profile.value?.root)
    console.log('profile', profile.value)

    return (<div className="route home">
        <div>
            You are <strong>{profile.value?.profile?.name}</strong>
        </div>

        {profile.value?.root?.projects?.length ? <h1>My Projects</h1> : null}
        {profile.value?.root?.projects?.map((project) => {
            return <div key={project?.id}>{project}</div>
        })}

        <h2>Create a List</h2>

        <form className="create-list" onSubmit={handleSubmit}
            onKeyDown={onFormKeydown}
            onInput={handleInput}
        >
            <TextInput displayName="List name" name="list-name" />
            <BtnPrimary disabled={!isListNameValid}>Create</BtnPrimary>
        </form>
    </div>)
}
