import { createLocalNode, createLocalAuth } from '../src/index.js'
// @ts-ignore
window.createLocalNode = createLocalNode
// @ts-ignore
window.createAuthStatus = createAuthStatus

const auth = createLocalAuth({ appName: 'test' })

// @ts-ignore
async function tester () {
    await createLocalNode({
        auth: auth.authProvider,
    })
}

// @ts-ignore
await tester()
console.log('hello')
