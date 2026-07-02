import { createSlice } from "@reduxjs/toolkit";

const loadLikedProducts = () => {
  if (typeof window === "undefined") return [];

  try {
    const stored = window.localStorage.getItem("likedProducts");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load liked products", error);
    return [];
  }
};

const initialState = {
  items: loadLikedProducts(),
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    toggleLikeProduct: (state, action) => {
      const existing = state.items.find((item) => item._id === action.payload._id);

      if (existing) {
        state.items = state.items.filter((item) => item._id !== action.payload._id);
      } else {
        state.items.push(action.payload);
      }

      if (typeof window !== "undefined") {
        window.localStorage.setItem("likedProducts", JSON.stringify(state.items));
      }
    },
    clearLikedProducts: (state) => {
      state.items = [];
      if (typeof window !== "undefined") {
        window.localStorage.removeItem("likedProducts");
      }
    },
  },
});

export const { toggleLikeProduct, clearLikedProducts } = likesSlice.actions;
export default likesSlice.reducer;
