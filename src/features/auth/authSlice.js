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
    },
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearAuth: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
    },
  },
});

export const { setAuthUser, setAuthToken, setAuthLoading, clearAuth } =
  authSlice.actions;
export default authSlice.reducer;
