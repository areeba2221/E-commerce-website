import { useState } from "react";
import myLogo from '/src/assets/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Shop", "About", "Contact"];

  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <img src={myLogo} alt="Company Logo" />
    
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="text-[16px] font-medium text-[#000000] hover:text-[#C8A96E] transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "'Poppins', sans-serif" }}>
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5 text-gray-700">
    
          <button className="hover:text-[#C8A96E] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
          <button className="hover:text-[#C8A96E] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0z" />
            </svg>
          </button>
          <button className="hover:text-[#C8A96E] transition-colors duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
            </svg>
          </button>
          <button className="hover:text-[#C8A96E] transition-colors duration-200 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
            </svg>
          </button>
        </div>

        </div>
    </nav>
  );
};

export default Navbar;