import { useState, useEffect, useRef } from "react";
import myLogo from "/src/assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../api/auth";
import { useAuth } from "../../context/AuthContext";
import { UserIcon, SearchIcon, HeartIcon, CartIcon } from "/src/assets/Svg";
import { useCart } from "../../context/CartContext";
import {StoreIcon, LogOutIcon, CircleUser, HeartPlus} from 'lucide-react';
import { toggleLikeProduct } from "/src/features/likes/likesSlice";

const navLinks = [
  { label: "Home", path: "/home" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, logout: logoutAuth } = useAuth();
  const { cartItems, setIsCartOpen } = useCart();
  const likedProducts = useSelector((state) => state.likes.items);
  const [activePage, setActivePage] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const searchRef = useRef(null);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      const input = searchRef.current.querySelector('input');
      if (input) input.focus();
    }
  }, [searchOpen]);

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
  <div className="absolute right-0 top-14 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">

    <div className="flex items-center gap-3 p-5 border-b">
      <CircleUser />

      <div>
        <h3 className="font-semibold text-gray-800">
          {user?.name || "User"}
        </h3>

        <p className="text-sm text-gray-500">
          {user?.email}
        </p>
      </div>
    </div>

    <button
      onClick={() => {
        navigate("/shop");
        setDropdownOpen(false);
      }}
      className="w-full flex items-center px-5 py-3 hover:bg-[#F9F1E7] transition"
    >
      <StoreIcon />

      <span className="ml-3">Your Shop</span>
    </button>

    <button
      onClick={() => {
        navigate("/wishlist");
        setDropdownOpen(false);
      }}
      className="w-full flex items-center px-5 py-3 hover:bg-[#F9F1E7] transition"
    >
      <HeartPlus />
      <span className="ml-3">Wishlist</span>
    </button>

    <div className="border-t mt-1"></div>

    <button
      onClick={() => {
        logout();
        setDropdownOpen(false);
      }}
      className="w-full flex items-center px-5 py-3 text-red-500 hover:bg-red-50 transition"
    >
      <LogOutIcon />
      <span className="ml-3 font-medium">Logout</span>
    </button>
  </div>
)}
            </div>
            
            <button className="hover:text-[#C8A96E]">
              {!searchOpen ? (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="hover:text-[#C8A96E]"
                >
                  <SearchIcon />
                </button>
              ) : null}
            </button>
            {searchOpen && (
              <div ref={searchRef} className="ml-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSearchOpen(false);
                    if (searchQuery.trim()) {
                      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      
                    } else {
                      navigate('/shop');
                    }
                    setSearchQuery("");
                  }}
                  className="flex items-center"
                >
                  <input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="border rounded px-2 py-1 text-sm w-48 focus:outline-none focus:ring focus:ring-[#C8A96E]"
                  />
                </form>
              </div>
            )}
            <button
              onClick={() => navigate("/wishlist")}
              className="hover:text-[#C8A96E] transition-colors duration-200 relative"
            >
              <HeartIcon />
              {likedProducts.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#B88E2F] text-white text-[11px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                  {likedProducts.length}
                </span>
              )}
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
