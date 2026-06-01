import { useState } from "react";
import {
  footerLinks,
  footerHelpLinks,
  footerAddress,
  footerCopyright,
} from "/src/data/Data";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-6 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">

          <div className="flex flex-col ">
            <h1 className="text-[24px] gap-10 font-bold text-[#000000] tracking-tight">
              Funiro.
            </h1>
            <p className="text-[#9F9F9F] gap-10 w-[285px] pt-[50px] font-medium text-[16px] leading-relaxed">
              {footerAddress.line1}
            </p>

            <p className="text-[#9F9F9F] w-[285px] font-medium text-[16px] leading-relaxed">
              {footerAddress.line2}
            </p>
          </div>

          <div className="flex flex-col gap-10 ml-[136px]">
            <h3 className="text-[#9F9F9F] text-[16px] font-normal">Links</h3>
            <nav className="flex flex-col gap-10">
              {footerLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-[#000000] text-[16px] font-medium hover:text-[#B88E2F] 
                  transition-colors" >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-10 ml-8">
            <h3 className="text-[#9F9F9F] text-[16px] font-normal">Help</h3>
            <nav className="flex flex-col gap-y-10">
              {footerHelpLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[#000000] text-[16px]  font-medium hover:text-[#B88E2F] 
                  transition-colors" >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-5 mr-6">
            <h3 className="text-[#9F9F9F] text-[16px] font-medium">
              Newsletter</h3>
            <div className="flex items-end gap-2">
              <div className="flex-1 flex flex-col">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-sm text-[#9F9F9F] placeholder-[#9F9F9F] bg-transparent 
                  border-b border-[#000000] pb-2 outline-none focus:border-[#B88E2F] 
                  transition-colors w-full"/>
              </div>
              <button
                className="text-[14px] font-medium text-[#000000] border-b border-[#000000] pb-2 
                hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors whitespace-nowrap 
                tracking-widest uppercase">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D9D9D9]" />
        <div className="pt-6">
          <p className="text-[#000000] text-[16px]">
            {footerCopyright}
          </p>
        </div>

      </div>
    </footer>
  );
}