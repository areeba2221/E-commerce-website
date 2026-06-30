import { data } from "react-router";
import API from "./axios";

export const registerUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);
export const logoutUser = () => API.post("/auth/logout");
export const getProfile = () => API.get("/auth/me");
export const updateProfile = (data) => API.put("/auth/updateMe", data);
export const changePassword = (data) => API.post("/auth/changePassword", data);
export const sendOtp = (data) => API.post("/auth/send-otp", data);
export const verifyOtp = (data) => API.post("/auth/verify-otp", data);
export const resetPassword = (data) => API.post("/auth/reset-password", data);
