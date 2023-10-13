import { LocalNode } from 'cojson'
import { AuthStatus, SignedInStatus } from '../src/index.js'

export function signedIn (
    authStatus:AuthStatus,
    localNode:LocalNode
):boolean {
    return (!!localNode && !!(authStatus as SignedInStatus).logOut)
}
