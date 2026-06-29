import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VarifyOtp";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "/src/context/CartContext";
import CartDrawer from "./components/features/CartDrawer";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import { ToastContainer } from "react-toastify";

function App() {

  return (

    <>

    <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    closeOnClick
                    pauseOnHover
                    theme="dark"
                />
    
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>

          <CartDrawer />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/verify-otp" element={<VerifyOtp />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            {/* <Route path="/order-success/:orderId" element={<OrderSuccess />} /> */}
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
    </>

    
  );
}

export default App;