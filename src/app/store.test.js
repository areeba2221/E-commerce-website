import test from "node:test";
import assert from "node:assert/strict";
import { store } from "./store.js";

test("store exposes auth state through redux", () => {
  const state = store.getState();

  assert.ok(state.auth);
  assert.deepEqual(state.auth.user, null);
});
