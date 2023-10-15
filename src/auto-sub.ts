import { Signal, signal } from '@preact/signals'
import { ResolvedAccount, autoSub as _autoSub } from 'jazz-autosub'
import { LocalNode } from 'cojson'

/**
 * Create a subscription to a node
 */

export function autoSub (node:LocalNode):Signal<null|ResolvedAccount> {
    const sub:Signal<null|ResolvedAccount> = signal(null)

    const unsubscribe = _autoSub('me', node, (resolved:ResolvedAccount) => {
        console.log('**resolved**', resolved)
        sub.value = resolved
    })

    return sub
}
