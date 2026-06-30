import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BG from "/src/assets/office.jpg";
import lock from "/src/assets/icon.jpg";
import API from "../api/axios";
import { toast } from "react-toastify";

const VerifyOtp = () => {
  const [otp, setOtp] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Session expired. Please request OTP again.");
      navigate("/forgot-password");
      return;
    }

    if (!otp.trim()) {
      toast.error("Please enter the OTP.");
      return;
    }

    try {
      await API.post("/auth/verify-otp", {
        email,
        otp: otp.trim(),
      });

      toast.success("OTP Verified");

      navigate("/reset-password", {
        state: { email, otp },
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid OTP");
    }
  };

  return (
    <div className="min-h-screen bg-[#B88E2F] flex items-center justify-center relative">
      <img
        src={BG}
        alt="Background image"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-8 pointer-events-none"
      />
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-lg rounded-lg w-100 relative z-10"
      >
        <img
          src={lock}
          alt="lock image"
          className="flex justify-between items-center content-center p-4 mb-2"
        />
        <h2 className="text-2xl font-bold mb-6">Verify OTP</h2>

        {email && (
          <p className="text-sm text-gray-500 mb-4">
            OTP sent to: <span className="font-medium">{email}</span>
          </p>
        )}

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-full
                     focus:outline-none focus:ring-2 focus:ring-[#B88E2F] mb-4 z-[999]"
        />

        <button
          type="submit"
          className="w-full bg-[#B88E2F] text-white py-3 rounded-full hover:bg-[#9a7526]"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default VerifyOtp;
