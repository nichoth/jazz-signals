# example

## architecture

**Routing** in [./routes/index.tsx](./routes/index.tsx)

[./index.tsx](./index.tsx) is where things start. Most of the logic is setup in [./state.ts](./state.ts) though. We export a handful of static functions that get called in response to view events.

All the functions of the app are static. They take an observable [state](https://github.com/nichoth/jazz-signals/blob/main/example/state.ts#L51) object and mutate it. It is simpler that way than creating closures or instance methods.
