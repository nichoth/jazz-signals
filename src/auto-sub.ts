import { Signal, signal } from '@preact/signals'
import { ResolvedAccount, autoSub as _autoSub } from 'jazz-autosub'
import { LocalNode } from 'cojson'

/**
 * Create a subscription to a node
 */

export function profile (node:LocalNode|null):{
    profile:Signal<null|ResolvedAccount>;
    unsubscribe:()=>void
} {
    const prof:Signal<null|ResolvedAccount> = signal(null)
    if (!node) return { profile: prof, unsubscribe: () => {} }

    const unsubscribe = _autoSub('me', node, (resolved:ResolvedAccount) => {
        console.log('**resolved**', resolved)
        prof.value = resolved
    })

    return { profile: prof, unsubscribe }
}
