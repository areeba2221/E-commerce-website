import { useState } from "react";
import { Link } from "react-router-dom";
import {
  footerLinks,
  footerHelpLinks,
  footerAddress,
  footerCopyright,
} from "/src/data/Data";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-12 pb-6 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12">
          <div>
            <h1 className="text-2xl font-bold text-black">Funiro.</h1>

            <p className="mt-6 text-[#9F9F9F] text-base leading-7 max-w-xs">
              {footerAddress.line1}
            </p>

            <p className="text-[#9F9F9F] text-base leading-7 max-w-xs">
              {footerAddress.line2}
            </p>
          </div>

          <div>
            <h3 className="text-[#9F9F9F] text-base mb-6">Links</h3>

            <nav className="flex flex-col gap-5">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-black font-medium hover:text-[#B88E2F] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[#9F9F9F] text-base mb-6">Help</h3>

            <nav className="flex flex-col gap-5">
              {footerHelpLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-black font-medium hover:text-[#B88E2F] transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-[#9F9F9F] text-base mb-6">Newsletter</h3>

            <div className="flex flex-col sm:flex-row gap-4 sm:items-end">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-black pb-2 outline-none text-sm placeholder-[#9F9F9F] focus:border-[#B88E2F]"
              />

              <button className="border-b border-black pb-2 uppercase tracking-wider text-sm font-medium hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D9D9D9] pt-6">
          <p className="text-black text-sm sm:text-base text-center sm:text-left">
            {footerCopyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
