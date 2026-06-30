import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BG from "/src/assets/office.jpg";
import lock from "/src/assets/icon.jpg";
import API from "../api/axios";
import { toast, ToastContainer } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/send-otp", { email });

      toast.success("OTP sent successfully");

      navigate("/verify-otp", {
        state: { email },
      });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed");
    }
  };

  return (
    <>
      {/* <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
                pauseOnHover
                theme="dark"
            /> */}
      <div className="min-h-screen bg-[#B88E2F] flex items-center justify-center">
        <img
          src={BG}
          alt="Background image"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-8"
        />
        <form
          onSubmit={handleSubmit}
          className="bg-white relative p-8 shadow-lg rounded-lg w-100"
        >
          <img
            src={lock}
            alt="lock image"
            className="flex justify-between items-center content-center p-4 mb-2"
          />

          <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-full
                            focus:outline-none focus:ring-2 focus:ring-[#B88E2F] mb-4"
          />

          <button className="w-full bg-[#B88E2F] text-white py-3 rounded-full hover:bg-[#9a7526]">
            Send OTP
          </button>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
