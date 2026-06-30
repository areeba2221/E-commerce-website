import React from "react";
import Navbar from "../components/layouts/Navbar";
import CheckoutHero from "../components/features/CheckoutHero";
import CheckoutSection from "../components/features/Checkoutsection";
import ShopServices from "../components/features/ShopServices";
import Footer from "../components/layouts/Footer";

const Checkout = () => {
  return (
    <>
      <Navbar />
      <CheckoutHero />
      <CheckoutSection />
      <ShopServices />
      <Footer />
    </>
  );
};

export default Checkout;
