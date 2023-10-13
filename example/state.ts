import Route from 'route-event'
import { signal } from '@preact/signals'
import { createLocalNode } from '../src/index.js'

const APP_NAME = 'jazz-signals Todo App'

export async function State () {
    console.log('hirrar')
    const route = Route()
    console.log('woooo')
    let node, authStatus
    try {
        const localNode = await createLocalNode({
            appName: APP_NAME
        })
        node = localNode.node
        authStatus = localNode.authStatus
    } catch (err) {
        console.log('errrrrrrrrrrrr', err)
    }

    console.log('aaaaaaaaaaaaaaa')

    const appState = {
        node,
        authStatus,
        routeState: signal<string>(location.pathname + location.search),
        _route: route
    }

    /**
     * subscribe to route changes
     */
    route(function onChange (path) {
        appState.routeState.value = path
    })

    return appState
}

State.setRoute = function (state:Awaited<ReturnType<typeof State>>, newPath) {
    state._route.setRoute(newPath)
}

State.redirectToLogin = function (state:Awaited<ReturnType<typeof State>>) {
    if (location.pathname.includes('login')) return
    state._route.setRoute('/login')
}
