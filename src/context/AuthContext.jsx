import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, registerUser, getProfile } from "../api/auth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import {
  setAuthUser,
  signout,
} from "../features/auth/authSlice.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchProfile = async () => {
      const savedToken = localStorage.getItem("token");

      try {
        const res = await getProfile();
        dispatch(setAuthUser(res.data.data));
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch(signout());}
      // } finally {
      //   dispatch(setAuthLoading(false));
      // }
    };

    fetchProfile();
  }, [dispatch]);

  const login = async (email, password) => {
    try {
      const res = await loginUser({ email, password });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      dispatch(setAuthUser({ token, user }));

      toast.success("Login successful!");

      return {
        success: true,
        user,
      };
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text:
          err.response?.data?.message ||
          "Please enter valid email and password",
        confirmButtonColor: "#B88E2F",
      });

      return {
        success: false,
      };
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await registerUser({
        name,
        email,
        password,
      });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

     
      dispatch(setAuthUser({ token, user }));

      toast.success("Account created successfully!");

      return {
        success: true,
        user,
      };
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Register Failed",
        text: err.response?.data?.message || "Please try again",
        confirmButtonColor: "#B88E2F",
      });

      return {
        success: false,
      };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    dispatch(signout());

    toast.success("Logged out successfully!");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        setUser: (user) => dispatch(setAuthUser(user)),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
