# jazz signals
![tests](https://github.com/nichoth/jazz-signals/actions/workflows/nodejs.yml/badge.svg)
[![module](https://img.shields.io/badge/module-ESM-blue)](README.md)
[![license](https://img.shields.io/badge/license-MIT-brightgreen)](LICENSE)


__WIP__

Use `@preact/signals` with [jazz](https://jazz.tools/).

[See a live example](https://nichoth.github.io/jazz-signals/)

## API

### telepathicSignal
Return an array of `[Signal, unsubscribeFunction]`.

```ts
import { LocalNode } from  'cojson'
import { Resolved } from 'jazz-autosub'

export function telepathicSignal<T extends CoValue> ({ id, node }:{
    id:CoID<T>
    node:LocalNode
}):[Signal<Resolved<T>|null>, ()=>void] {
```

#### example
```ts
const todoSignal = telepathicSignal<TodoProject>({
    id: params.id,
    node: localNode.value
})
```
