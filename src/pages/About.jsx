import React from "react";
import Navbar from "../components/layouts/Navbar";
import AboutHero from "../components/features/AboutHero";
import ShopServices from "../components/features/ShopServices";
import Footer from "../components/layouts/Footer";

const About = () => {
    return (
        <>
        <Navbar/>
        <AboutHero/>
        
        <ShopServices/>
            <Footer />
        </>
    );
}
 
export default About;