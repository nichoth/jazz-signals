import { Signal, signal } from '@preact/signals'
import { ResolvedAccount, autoSub as _autoSub } from 'jazz-autosub'
import { LocalNode } from 'cojson'

/**
 * Create a subscription to a node
 */

export function profile (node:LocalNode|null):Signal<null|ResolvedAccount> {
    const sub:Signal<null|ResolvedAccount> = signal(null)
    if (!node) return sub

    const unsubscribe = _autoSub('me', node, (resolved:ResolvedAccount) => {
        console.log('**resolved**', resolved)
        sub.value = resolved
    })

    return sub
}
