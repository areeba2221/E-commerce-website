import React, { useState } from "react";
import { registerUser } from "../api/auth";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginBG from "/src/assets/login image.jpg"
import myLogo from '/src/assets/logo.png';
import { EyeIcon, EyeOff } from "/src/assets/Svg";

const Register = () => {
   const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {

    if (!formData.name || formData.name.trim().length < 3) {
      alert("Name must be at least 3 characters");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email");
      return false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      alert("Password must be 8+ chars with uppercase, lowercase, number and special character");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  };

  // const handleSubmit = async () => {
  //   if (!form.name || !form.email || !form.password) return;
  //   setLoading(true);
  //   const result = await register(form.name, form.email, form.password);
  //   setLoading(false);
  //   if (result.success) navigate("/");
  // };

   const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        try {
            setLoading(true);

            const { confirmPassword, ...dataToSend } = formData;
            await registerUser(dataToSend);

            alert("Register Successful");
            localStorage.setItem("token", res.data.token);
            setToken(res.data.token);
            navigate('/');

        } catch (err) {
            console.log(err);
            alert(
                err.response?.data?.message ||
                err.message
            );
        } finally {
            setLoading(false);
        }
    };


  return (
    <div className="min-h-screen bg-[#B88E2F] flex items-center justify-center p-6">
      <div className="bg-[#F9F1E7] rounded-3xl overflow-hidden shadow-2xl w-full max-w-5xl grid md:grid-cols-2">

        <div className="p-12 flex flex-col justify-center">

          <img
            src={myLogo}
            alt="Company Logo"
            className="mb-6 w-46" />

          <h2 className="text-3xl font-bold mb-5">Create Account</h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <div>
              <label htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                autoComplete="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-full
                            focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
              />
            </div>
            <div>
              <label htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1">
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
              <label htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  autoComplete="new-password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full
                            focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
                <button
                  type="button"
                  className="absolute right-4 top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                   {showPassword ? <EyeOff className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                </button>
              </div>

            </div>

            <div>
              <label htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  autoComplete="new-password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full
                            focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
                />
                <button
                  type="button"
                  className="absolute right-4 top-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                 
                </button>
              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#B88E2F] text-white py-3 rounded-full hover:bg-[#9a7526]">
              {loading ? "Creating Account..." : "Register"}
            </button>
          </form>

          <p className="text-center mt-6">
            Already have an account?
            <Link to="/login"
              className="text-[#B88E2F] hover:underline font-semibold ml-2 cursor-pointer">
              Login
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

export default Register;