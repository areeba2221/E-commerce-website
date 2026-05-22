import React from "react";
import Navbar from "../components/layouts/Navbar";
import Hero from "../components/features/HeroSection";
import BrowseRange from "../components/features/Browserange";
import OurProducts from "../components/features/OurProducts";
import Inspirations from "../components/features/Inspiration";
import ShareSetup from "../components/features/ShareSetup";
import Footer from "../components/layouts/Footer";

const Home = () => {
    return (
        <div className="min-h-screen font-poppins">
            <Navbar/>
            <Hero />
            <BrowseRange />
            <OurProducts />
            <Inspirations />
            <ShareSetup />
            <Footer />
        </div>
    );
}
 
export default Home;