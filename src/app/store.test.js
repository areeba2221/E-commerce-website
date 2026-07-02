import test from "node:test";
import assert from "node:assert/strict";
import { store } from "./store.js";
import { clearLikedProducts, toggleLikeProduct } from "../features/likes/likesSlice";

test("store exposes auth state through redux", () => {
  const state = store.getState();

  assert.ok(state.auth);
  assert.deepEqual(state.auth.user, null);
});

test("toggleLikeProduct stores liked products in redux state", () => {
  store.dispatch(clearLikedProducts());
  store.dispatch(toggleLikeProduct({ _id: "p1", name: "Chair", price: 100 }));

  const state = store.getState();

  assert.equal(state.likes.items.length, 1);
  assert.equal(state.likes.items[0]._id, "p1");
});
