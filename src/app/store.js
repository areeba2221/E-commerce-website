import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import cartReducer from "../features/cart/cartSlice";
import likesReducer from "../features/likes/likesSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    likes: likesReducer,
  },
});

export default store;
