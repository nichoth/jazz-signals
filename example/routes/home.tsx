import { FunctionComponent, JSX } from 'preact'
import { TextInput } from '../components/text-input.js'
import { State, createList } from '../state.js'
import { Primary as BtnPrimary } from '../components/button.js'

export const Home:FunctionComponent<{
    state:ReturnType<typeof State>
}> = function ({ state }) {
    function handleSubmit (ev:JSX.TargetedEvent) {
        ev.preventDefault()
        const { elements } = (ev.target as HTMLFormElement)
        const listName = (elements.namedItem('list-name') as HTMLInputElement).value
        console.log('create a list', listName)
        createList(state, { name: listName })
    }

    return (<div className="route home">
        <h2>Create a List</h2>
        <form className="create-list" onSubmit={handleSubmit}>
            <TextInput displayName="List name" name="list-name" />
            <BtnPrimary>Create</BtnPrimary>
        </form>
    </div>)
}
