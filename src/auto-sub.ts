import { Signal, signal } from '@preact/signals'
import { ResolvedAccount, autoSub } from 'jazz-autosub'
import { LocalNode } from 'cojson'

/**
 * Get your profile
 */
export function profile (node:LocalNode|null):{
    profile:Signal<null|ResolvedAccount>;
    unsubscribe:()=>void
} {
    const prof:Signal<null|ResolvedAccount> = signal(null)
    if (!node) return { profile: prof, unsubscribe: () => {} }

    const unsubscribe = autoSub('me', node, (resolved:ResolvedAccount) => {
        prof.value = resolved
    })

    return { profile: prof, unsubscribe }
}
