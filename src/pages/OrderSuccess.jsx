import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import { CheckIcon } from "../assets/Svg";
import orderBg from "/src/assets/living.jpg";

const OrderSuccess = () => {
  return (
    <>
     <Navbar />
      <div className="relative min-h-screen flex items-center justify-center w-full antialiased font-sans overflow-hidden">
         
        <img
          src={orderBg}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        
        <div
          className="w-full max-w-xl mx-4 absolute z-10 bg-[#F9F1E7]/95 backdrop-blur-sm 
        rounded-[32px] shadow-2xl overflow-hidden border border-slate-200/50"
        >
          <main className="flex flex-col items-center justify-center px-6 pt-12 pb-12 text-center">
            <div
              className="flex items-center justify-center w-16 h-16 bg-[#52b788]
             rounded-full shadow-sm mb-6"
            >
              <CheckIcon />
            </div>
            <h1 className="text-3xl sm:text-4xl font-semibold text-neutral-800 tracking-tight mb-4">
              Thank you for your purchase
            </h1>
            <p className="text-neutral-600 max-w-md leading-relaxed text-[15px] mb-6">
              We've received your order and will ship it in 5-7 business days.
            </p>
            <Link
              to="/home"
              className="px-6 py-2.5 border border-[#d4ab49] text-neutral-800 text-xs 
              font-semibold rounded-lg bg-transparent hover:bg-[#B88E2F] hover:text-white 
              transition-all duration-200 shadow-sm"
            >
              Back to Home
            </Link>
          </main>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
