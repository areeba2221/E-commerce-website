import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser, getProfile } from "../api/auth";
import Swal from "sweetalert2";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null,
  );

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const savedToken = localStorage.getItem("token");

      if (!savedToken) {
        setLoading(false);
        return;
      }

      try {
        const res = await getProfile();
        setUser(res.data.data);
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await loginUser({ email, password });

      const { token, user } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setToken(token);
      setUser(user);

      Swal.fire({
        icon: "success",
        title: `Welcome, ${user.name}`,
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      });

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

      setToken(token);
      setUser(user);

      Swal.fire({
        icon: "success",
        title: "Account Created Successfully",
        text: `Welcome ${user.name}`,
        timer: 1500,
        showConfirmButton: false,
        timerProgressBar: true,
      });

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

    setToken(null);
    setUser(null);

    Swal.fire({
      icon: "success",
      title: "Logged Out Successfully",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        login,
        register,
        logout,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
