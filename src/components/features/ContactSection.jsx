import React , { useRef } from "react";
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
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

      <div className="max-w-6xl mx-auto mt-30 grid md:grid-cols-2 gap-20 px-47">

        <div className="space-y-12">

          <div className="flex gap-5">
            <MapPin size={30} className="mt-1" />

            <div>
              <h3 className="text-3xl font-semibold mb-2">
                Address
              </h3>

              <p className="text-gray-700 text-lg">
                236 5th SE Avenue, New York
                NY10000, United States
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Phone size={30} className="mt-1" />

            <div>
              <h3 className="text-3xl font-semibold mb-2">
                Phone
              </h3>

              <p className="text-gray-700 text-lg">
                Mobile: +(84) 546-6789
              </p>

              <p className="text-gray-700 text-lg">
                Hotline: +(84) 456-6789
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Clock size={30} className="mt-1" />

            <div>
              <h3 className="text-3xl font-semibold mb-2">
                Working Time
              </h3>

              <p className="text-gray-700 text-lg">
                Monday-Friday: 9:00 - 22:00
              </p>

              <p className="text-gray-700 text-lg">
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>

        <form
        ref={form} onSubmit={sendEmail}
        className="space-y-8">

          <div>
            <label className="block mb-3 font-medium">
              Your name
            </label>

            <input
              type="text"
              name="user_name"
              placeholder="Abc"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>

          <div>
            <label className="block mb-3 font-medium">
              Email address
            </label>

            <input
              type="email"
              name="user_email"
              placeholder="Abc@def.com"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>

          <div>
            <label className="block mb-3 font-medium">
              Subject
            </label>

            <input
              type="text"
              name="subject"
              placeholder="This is optional"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            />
          </div>

          <div>
            <label className="block mb-3 font-medium">
              Message
            </label>

            <textarea
              rows="5"
              name="message"
              placeholder="Hi! I'd like to ask about"
              className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-[#B88E2F]"
            ></textarea>
          </div>

          <button
            type="submit"
            value="Send"
            className="bg-[#B88E2F] hover:bg-[#9c7724] text-white px-12 py-4 rounded-lg transition"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactSection;