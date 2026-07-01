import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  subtotal: 0,
  isCartOpen: false,
  loading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, action) => {
      state.items = action.payload;
    },
    setCartSubtotal: (state, action) => {
      state.subtotal = action.payload;
    },
    toggleCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    setCartOpen: (state, action) => {
      state.isCartOpen = action.payload;
    },
    setCartLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearCart: (state) => {
      state.items = [];
      state.subtotal = 0;
      state.isCartOpen = false;
    },
  },
});

export const {
  setCartItems,
  setCartSubtotal,
  toggleCartOpen,
  setCartOpen,
  setCartLoading,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
