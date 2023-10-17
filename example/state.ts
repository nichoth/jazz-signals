import { Signal, signal } from '@preact/signals'
import { Account, LocalNode } from 'cojson'
import { Resolved } from 'jazz-autosub'
import Route from 'route-event'
import {
    createLocalNode,
    createLocalAuth,
    AuthStatus,
    ReadyStatus
} from '../src/index.js'
import { profile as getProfile } from '../src/auto-sub.js'
import { Task, ListOfTasks, TodoProject } from './types.js'

export function State ():{
    localNode:Signal<LocalNode|null>;
    authStatus:Signal<AuthStatus>;
    profile:Signal<Resolved<Account>|null>;
    logoutCount:Signal<number>;
    route:Signal<string>;
    _setRoute:(path:string)=>void;
} {  // eslint-disable-line indent
    const {
        authProvider,
        authStatus,
        logoutCount
    } = createLocalAuth({ appName: 'Todo App' })

    /**
     * connect to jazz
     */
    const { node } = createLocalNode({
        auth: authProvider,
        authStatus,
        logoutCount
    })

    const { profile } = getProfile(node)

    const onRoute = Route()
    const state = {
        _setRoute: onRoute.setRoute.bind(onRoute),
        localNode: node,
        profile,
        logoutCount,
        authStatus,
        route: signal(location.pathname + location.search)
    }

    onRoute((path) => {
        state.route.value = path
    })

    return state
}

export function setProfile (state:ReturnType<typeof State>, username:string) {
    (state.authStatus.value as ReadyStatus).signUp(username)
}

export function createList (state:ReturnType<typeof State>, { name }:{
    name:string
}) {
    const projectGroup = state.localNode.value!.createGroup()
    const project = projectGroup.createMap<TodoProject>()
    const tasks = projectGroup.createList<ListOfTasks>()

    // We edit the todo project to initialise it.
    // Inside the `.mutate` callback we can mutate a CoValue
    project.mutate(_project => {
        _project.set('title', name)
        _project.set('tasks', tasks.id)
    })

    state._setRoute(`/id/${project.id}`)

    return state
}

export function createTask (
    project:Resolved<TodoProject>,
    opts:{
        name:string,
    }
) {
    if (!project.tasks) return

    const { name } = opts
    const task = project.meta.group.createMap<Task>({
        done: false,
        text: name,
    })

    project.tasks.append(task.id)
}
