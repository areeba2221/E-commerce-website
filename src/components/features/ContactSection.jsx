import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from 'react-toastify';
import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send message.");
        }
      );
  };

  return (
    <>
    <ToastContainer
                position="top-right"
                autoClose={3000}
                closeOnClick
                pauseOnHover
                theme="dark"
            />
    
    <div className="bg-white min-h-screen py-24 px-6">
      <div className="text-center max-w-[644px] mx-auto">
        <h1 className="text-4xl font-semibold mb-4">
          Get In Touch With Us
        </h1>

        <p className="text-gray-500 leading-relaxed">
          For More Information About Our Product & Services.
          Please Feel Free To Drop Us An Email. Our Staff
          Always Be There To Help You Out. Do Not Hesitate!
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-2 gap-12">

        <div className="space-y-10">

          <div className="flex gap-5">
            <MapPin size={30} className="mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Address</h3>
              <p className="text-gray-700">
                236 5th SE Avenue, New York
                <br />
                NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Phone size={30} className="mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-700">Mobile: +(84) 546-6789</p>
              <p className="text-gray-700">Hotline: +(84) 456-6789</p>
            </div>
          </div>

          <div className="flex gap-5">
            <Clock size={30} className="mt-1" />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Working Time</h3>
              <p className="text-gray-700">Monday-Friday: 9:00 - 22:00</p>
              <p className="text-gray-700">Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>

        </div>

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          <div>
            <label className="block mb-2 font-medium">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Abc"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="abc@def.com"
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Subject
            </label>

            <input
              type="text"
              name="title"
              placeholder="This is optional"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              placeholder="Hi! I'd like to ask about..."
              required
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>

          <button
            type="submit"
            className="bg-[#B88E2F] hover:bg-[#9c7724] text-white px-12 py-4 rounded-lg transition"
          >
            Submit
          </button>
        </form>

      </div>
    </div>

    </>
    
  );
};

export default ContactSection;