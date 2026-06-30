import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BG from "/src/assets/office.jpg";
import lock from "/src/assets/icon.jpg";
import API from "../api/axios";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [password, setPassword] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;
  const otp = location.state?.otp;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/reset-password", {
        email,
        otp,
        password,
      });

      toast.success("Password Reset Successfully");

      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#B88E2F]  flex items-center justify-center">
      <img
        src={BG}
        alt="Background image"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-8 pointer-events-none"
      />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg w-96 relative z-10"
      >
        <img
          src={lock}
          alt="lock image"
          className="flex justify-between items-center content-center p-4 mb-2"
        />
        <h2 className="text-2xl font-bold mb-6">Reset Password</h2>

        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-full
                            focus:outline-none focus:ring-2 focus:ring-[#B88E2F] mb-4 z-999"
        />

        <button className="w-full bg-[#B88E2F] text-white py-3 rounded-full hover:bg-[#9a7526]">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
