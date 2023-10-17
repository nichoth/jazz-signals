import { Signal, signal, effect } from '@preact/signals'
import { ResolvedAccount, autoSub } from 'jazz-autosub'
import { LocalNode } from 'cojson'

/**
 * Get your profile
 */
export function profile (node:Signal<LocalNode|null>):{
    profile:Signal<null|ResolvedAccount>;
    unsubscribe:()=>void
} {
    const prof:Signal<null|ResolvedAccount> = signal(null)
    let unsub = () => {}

    effect(() => {
        if (!node.value) return { profile: prof, unsubscribe: () => {} }

        unsub = autoSub('me', node.value, (resolved:ResolvedAccount) => {
            prof.value = resolved
        })
    })

    function unsubscribe () {
        unsub()
    }

    return { profile: prof, unsubscribe }
}
