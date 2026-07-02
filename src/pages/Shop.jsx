import { useLocation } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import ShopHeroSection from "../components/features/ShopHeroSection";
import ShopFilterBar from "../components/features/ShopFilterBar";
import ShopProducts from "../components/features/ShopProducts";
import ShopServices from "../components/features/ShopServices";
import Footer from "../components/layouts/Footer";

const Shop = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  return (
    <>
      <Navbar />
      <ShopHeroSection />
      <ShopFilterBar />
      <ShopProducts searchQuery={searchQuery} />
      <ShopServices />
      <Footer />
    </>
  );
};

export default Shop;