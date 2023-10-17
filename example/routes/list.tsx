import { FunctionComponent } from 'preact'
import { useMemo, useCallback } from 'preact/hooks'
import { CoID } from 'cojson'
import { ResolvedCoMap } from 'jazz-autosub'
import { Task, TodoProject } from '../types.js'
import { SubmittableInput } from '../components/submittable-input.js'
import { ButtonBack } from '../components/btn-back.js'
import { State, createTask } from '../state.js'
// import { TextInput } from '../components/text-input.js'
// import { Primary as BtnPrimary } from '../components/button.js'
import { telepathicSignal } from '../../src/index.js'
import './list.css'

export const ListView:FunctionComponent<{
    state:ReturnType<typeof State>;
    params:{
        ['id']:CoID<TodoProject>;
    }
}> = function ({ state, params }) {
    const { localNode } = state

    const [project] = useMemo(() => {
        if (!localNode.value) return []

        return telepathicSignal<TodoProject>({
            id: params.id,  // <-- here we consume the project ID
            node: localNode.value
        })
    }, [params.id, localNode.value])

    const handleChange = useCallback(function handleChange (
        task:ResolvedCoMap<Task>,
        ev
    ) {
        // "done" status is all that can change
        const checked = ev.target.form.elements['done-status'].checked
        task.mutate(_task => _task.set('done', !!checked))
    }, [])

    function _createTask (text) {
        if (!project || !project.value) throw new Error('not project')
        createTask(project.value, { name: text })
    }

    return (<div className="route list-view">
        <div>
            <a href="/" className="nav back">
                <ButtonBack /> Back to lists
            </a>
        </div>

        <h1>{project && project.value?.title}</h1>

        <ul className="todo-list">
            {project?.value?.tasks?.map(task => {
                return (<li key={task && task.id}>
                    <form onChange={handleChange.bind(null, task!)}>
                        <label>
                            <input defaultChecked={task?.get('done') || false}
                                type="checkbox"
                                name="done-status"
                            />
                            {task?.get('done') ?
                                (<span>{' '}<s>{task.get('text')}</s></span>) :
                                (<span>{' ' + task?.get('text')}</span>)
                            }
                        </label>
                    </form>
                </li>)
            })}
        </ul>

        <div>
            <NewTaskInputRow onCreateTask={_createTask} />
        </div>
    </div>)
}

const NewTaskInputRow:FunctionComponent<{
    onCreateTask: (text: string) => void;
    disabled?: boolean;
}> = function NewTaskInputRow ({
    onCreateTask,
    disabled,
}) {
    return (<SubmittableInput
        primary={true}
        action="Create a new task"
        onSubmit={onCreateTask}
        displayName="New task name"
        minLength={3}
        disabled={disabled}
    />)
}
