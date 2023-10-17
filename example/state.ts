import { Signal, effect, signal } from '@preact/signals'
import { Account, LocalNode, Profile, AccountMeta, ProfileMeta } from 'cojson'
import { ProfileShape } from 'cojson/src/coValues/account.js'
import { Resolved, ResolvedAccount } from 'jazz-autosub'
import Route from 'route-event'
import {
    profile as getProfile,
    createLocalNode,
    createLocalAuth,
    AuthStatus,
    ReadyStatus
} from '../src/index.js'
import { Task, ListOfTasks, TodoProject, TodoAccountRoot } from './types.js'

export function State ():{
    localNode:Signal<LocalNode|null>;
    authStatus:Signal<AuthStatus>;
    profile:Signal<ResolvedAccount<Account<
        Profile<ProfileShape, ProfileMeta>,
        TodoAccountRoot,
        AccountMeta
    >>|null>;
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

    const { profile } = getProfile<Profile, TodoAccountRoot, AccountMeta>(node)

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

export function createNewProfile (state:ReturnType<typeof State>, username:string) {
    (state.authStatus.value as ReadyStatus).signUp(username)
}

export function createList (state:ReturnType<typeof State>, { name }:{
    name:string
}) {
    if (!name) throw new Error('missing list name')

    const { profile } = state

    effect(() => {
        if (!profile.value) return
        const projectGroup = profile.value.createGroup()

        const project = projectGroup.createMap<TodoProject>({
            title: name,
            tasks: projectGroup.createList<ListOfTasks>().id
        })

        profile.value.root?.projects?.append(project.id)
        state._setRoute(`/id/${project.id}`)
    })

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
