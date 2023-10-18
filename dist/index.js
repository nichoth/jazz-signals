"use strict";
import { createBrowserNode } from "jazz-browser";
import { signal, effect } from "@preact/signals";
import { BrowserLocalAuth } from "jazz-browser-auth-local";
import { autoSub } from "jazz-autosub";
export function createLocalAuth({
  appName,
  appHostname
}) {
  const authStatus = signal({ status: null });
  const logoutCount = signal(0);
  const localAuthObj = new BrowserLocalAuth(
    {
      onReady(next) {
        authStatus.value = {
          status: "ready",
          logIn: next.logIn,
          signUp: next.signUp
        };
      },
      onSignedIn(next) {
        authStatus.value = {
          status: "signedIn",
          logOut: () => {
            next.logOut();
            authStatus.value = { status: "loading" };
            logoutCount.value = logoutCount.value + 1;
          }
        };
      }
    },
    appName,
    appHostname
  );
  return { authProvider: localAuthObj, authStatus, logoutCount };
}
export function createLocalNode({
  auth,
  syncAddress,
  authStatus,
  logoutCount
}) {
  const nodeSignal = signal(null);
  let _done;
  let count = logoutCount.peek();
  effect(async () => {
    if (logoutCount.value > count) {
      count = logoutCount.value;
      done();
      const nodeHandle2 = await createBrowserNode({ auth, syncAddress });
      nodeSignal.value = nodeHandle2.node;
      _done = nodeHandle2.done;
      return;
    }
    if (authStatus.value.status !== null)
      return;
    const nodeHandle = await createBrowserNode({
      auth,
      syncAddress
    });
    nodeSignal.value = nodeHandle.node;
    _done = nodeHandle.done;
  });
  function done() {
    if (!_done)
      throw new Error("Called `done` before it exists");
    _done();
  }
  return { done, node: nodeSignal };
}
export function telepathicSignal({
  id,
  node
}) {
  const state = signal(null);
  const unsubscribe = autoSub(id, node, (data) => {
    state.value = data;
  });
  return [state, unsubscribe];
}
export function profile(node) {
  const profile2 = signal(null);
  let _unsubscribe = () => {
  };
  const dispose = effect(() => {
    if (!node.value)
      return;
    _unsubscribe = autoSub("me", node.value, (resolved) => {
      profile2.value = resolved;
    });
  });
  function unsubscribe() {
    _unsubscribe();
    dispose();
  }
  return { profile: profile2, unsubscribe };
}
//# sourceMappingURL=index.js.map
