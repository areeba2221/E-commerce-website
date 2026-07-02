import { createSlice } from "@reduxjs/toolkit";

const savedUser =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null;

const savedToken =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

const initialState = {
  user: savedUser,
  token: savedToken,
  loading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.user = action.payload;
      state.token = action.payload;
    },
    signout: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
    },
  },
});

export const { setAuthUser, signout } = authSlice.actions;
export default authSlice.reducer;
