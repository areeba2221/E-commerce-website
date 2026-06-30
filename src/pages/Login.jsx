import React, { useState } from "react";
import { loginUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginBG from "/src/assets/login image.jpg";
import myLogo from "/src/assets/logo.png";
import { EyeIcon, EyeOff } from "/src/assets/Svg";

const Login = () => {
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      const result = await login(formData.email, formData.password);

      if (result.success) {
        if (result.user?.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/home");
        }
      }
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || error.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#B88E2F] flex items-center justify-center p-6">
      <div className="bg-[#F9F1E7] rounded-3xl overflow-hidden shadow-2xl w-full max-w-5xl grid md:grid-cols-2">
        <div className="p-12 flex flex-col justify-center">
          <img src={myLogo} alt="Company Logo" className="mb-8 w-46" />

          <h2 className="text-3xl font-bold mb-6">Login</h2>

          {/* <button className="flex items-center justify-center gap-3 border rounded-full py-3 shadow-sm hover:bg-gray-50 transition">
            <FcGoogle size={24} />
            Sign in with Google
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-grow" />
            <span className="mx-3 text-gray-400">OR</span>
            <hr className="flex-grow" />
          </div> */}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full
                            focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full px-4 py-3 border border-gray-300 rounded-full
                            focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />

                <button
                  type="button"
                  className="absolute right-4 top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end text-sm">
              {/* <label className="flex items-center gap-2">
                                <input type="checkbox" />
                                Remember Me
                            </label> */}

              <Link
                to="/forgot-password"
                className="text-[#B88E2F] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B88E2F] text-white py-3 rounded-full hover:bg-[#9a7526]"
            >
              {loading ? "logging in..." : "Login"}
            </button>
          </form>

          <p className="text-center mt-6">
            Don't have an account?
            <Link
              to="/register"
              className="text-[#B88E2F] hover:underline font-semibold cursor-pointer ml-2"
            >
              Register
            </Link>
          </p>
        </div>

        <div className="hidden md:block">
          <img
            src={LoginBG}
            alt="chair"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
