import React from "react";
import Navbar from "../components/layouts/Navbar";
import CartHero from "../components/features/CartHero";
import CartSection from "../components/features/CartSection";
import ShopServices from "../components/features/ShopServices";
import Footer from "../components/layouts/Footer";

const Cart = () => {
  return (
    <>
      <Navbar />
      <CartHero />
      <CartSection />
      <ShopServices />
      <Footer />
    </>
  );
};

export default Cart;
