import { useState, useEffect, useRef } from "react";
import myLogo from "/src/assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { changePassword } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import { UserIcon, SearchIcon, HeartIcon, CartIcon } from "/src/assets/Svg";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { label: "Home", path: "/home" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout: logoutAuth } = useAuth();
  const { cartItems, setIsCartOpen } = useCart();
  const [activePage, setActivePage] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    logoutAuth();
    navigate("/login");
  };

  return (
    <>
      <nav className="w-full bg-white shadow-sm px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button onClick={() => navigate("/home")} className="cursor-pointer">
            <img src={myLogo} alt="Logo" />
          </button>

          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map(({ label, path }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `text-[16px] font-medium pb-1 ${
                      isActive
                        ? "text-[#C8A96E] border-b-2 border-[#C8A96E]"
                        : "text-black"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-5 text-gray-700">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="hover:text-[#C8A96E]"
              >
                <UserIcon />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-4 w-60 bg-[#F9F1E7] shadow-lg rounded-xl z-40">
                  <div className="p-4 border-b">
                    <p className="font-bold">{user?.name || "User"}</p>
                    <p className="text-sm text-gray-500">{user?.email || ""}</p>
                  </div>

                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-red-500 font-semibold hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
            <button className="hover:text-[#C8A96E]">
              <SearchIcon />
            </button>
            <button className="hover:text-[#C8A96E]">
              <HeartIcon />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="hover:text-[#C8A96E] transition-colors duration-200 relative"
            >
              <CartIcon />
              {cartCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 bg-[#B88E2F] text-white 
                text-[11px] font-semibold w-5 h-5 rounded-full flex items-center 
                justify-center"
                >
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
