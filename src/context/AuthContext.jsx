import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser, getProfile } from "../api/auth";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser]       = useState(null);
  const [token, setToken]     = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token) {
      getProfile()
        .then(res => {
          setUser(res.data.data);
          setLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setToken(null);
          setUser(null);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [token]);

  const login = async (email, password) => {
    try {
      const res = await loginUser({ email, password });
      const { token, user } = res.data;

      localStorage.setItem("token", token);   
      setUser(user);

      Swal.fire({
        icon:              "success",
        title:             `Welcome, ${user.name}`,
        timer:             1500,
        showConfirmButton: false,
        timerProgressBar:  true,
      });

      return { success: true, user };

    } catch (err) {
      Swal.fire({
        icon:              "error",
        title:             "Login Failed",
        text:              err.response?.data?.message || "Please Enter valid email and password",
        confirmButtonColor: "#B88E2F",
      });
      return { success: false };
    }
  };

  const register = async (name, email, password) => {
    try {
      const res = await registerUser({ name, email, password });
      const { token, user } = res.data;

      localStorage.setItem("token", token);
      setToken(token);
      setUser(user);

      Swal.fire({
        icon:              "success",
        title:             "Your account has been created!",
        text:              `Welcome ${user.name}`,
        timer:             1500,
        showConfirmButton: false,
        timerProgressBar:  true,
      });

      return { success: true };

    } catch (err) {
      Swal.fire({
        icon:              "error",
        title:             "Register Failed",
        text:              err.response?.data?.message || "Please try again",
        confirmButtonColor: "#B88E2F",
      });
      return { success: false };
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);

    Swal.fire({
      icon:              "success",
      title:             "You have successfully signed out!",
      timer:             1200,
      showConfirmButton: false,
    });
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);