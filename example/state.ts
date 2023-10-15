import { createLocalNode, createAuthStatus } from '../src/index.js'
// @ts-ignore
window.createLocalNode = createLocalNode
// @ts-ignore
window.createAuthStatus = createAuthStatus

// @ts-ignore
async function tester () {
    await createLocalNode({
        authStatus: createAuthStatus(),
        appName: 'test'
    })
}

// @ts-ignore
await tester()
console.log('hello')
