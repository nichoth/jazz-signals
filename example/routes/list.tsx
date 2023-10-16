import { FunctionComponent } from 'preact'
import { signal } from '@preact/signals'
import { useMemo } from 'preact/hooks'
import { CoID } from 'cojson'
import { TodoProject, ListOfTasks } from '../types.js'
import { State } from '../state.js'
import { TextInput } from '../components/text-input.js'
import { Primary as BtnPrimary } from '../components/button.js'
import { telepathicSignal } from '../../src/index.js'

export const ListView:FunctionComponent<{
    state:ReturnType<typeof State>;
    params:{
        ['id']:CoID<TodoProject>
    }
}> = function ({ state, params }) {
    const [project] = (useMemo(() => {
        return telepathicSignal<TodoProject>({
            id: params.id,  // <-- here we consume the project ID
            localNode: state.localNode
        })
    }, [params.id, state.localNode.value])).value

    // get tasks (the list of things to do)
    // this is where we subscribe to task changes
    const tasksSignal = useMemo(() => {
        if (!project) return signal([])
        const tasksId = project.get('tasks')

        return telepathicSignal<ListOfTasks>({
            id: tasksId,
            localNode: state.localNode
        })
    }, [project, state.localNode.value])

    const [tasks] = tasksSignal.value

    console.log('__tasks__', tasks)

    // @ts-ignore
    window.tasks = tasks

    return (<div className="route list-view">
        <ul className="todo-list">
            {tasks?.asArray().map(taskId => {
                console.log('**task id**', taskId)
                return <li key={taskId}>{taskId}</li>
            })}
        </ul>
        <p>the list ID: {params.id}</p>
    </div>)
}
