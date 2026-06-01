import { useState } from "react";
import myLogo from '/src/assets/logo.png';
import { NavLink } from "react-router-dom";
import {
  UserIcon,
  SearchIcon,
  HeartIcon,
  CartIcon,
} from "/src/assets/Svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [activePage, setActivePage] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <button onClick={() => setActivePage("Home")} 
        style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
          <img src={myLogo} alt="Company Logo" />
        </button>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <NavLink to={path} onClick={() => setActivePage(label)}>
                <span
                  className="text-[16px] font-medium transition-colors duration-200 tracking-wide pb-1"
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    cursor: "pointer",
                    color: activePage === label ? "#C8A96E" : "#000000",
                    borderBottom: activePage === label ? "2px solid #C8A96E" : "2px solid transparent",}}>
                  {label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-5 text-gray-700">
          <button className="hover:text-[#C8A96E] transition-colors duration-200">
            <UserIcon /></button>
          <button className="hover:text-[#C8A96E] transition-colors duration-200">
            <SearchIcon /></button>
          <button className="hover:text-[#C8A96E] transition-colors duration-200">
            <HeartIcon /></button>
          <button className="hover:text-[#C8A96E] transition-colors duration-200 relative">
            <CartIcon /></button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;