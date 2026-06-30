import React from "react";
import Navbar from "../components/layouts/Navbar";
import ContactHero from "../components/features/ContactHero";
import ContactSection from "../components/features/ContactSection";
import ShopServices from "../components/features/ShopServices";
import Footer from "../components/layouts/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />
      <ContactSection />
      <ShopServices />
      <Footer />
    </>
  );
};

export default Contact;
