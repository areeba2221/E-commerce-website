import Navbar from "../components/layouts/Navbar";
import ShopHeroSection from "../components/features/ShopHeroSection";
import ShopFilterBar from "../components/features/ShopFilterBar";
import ShopProducts from "../components/features/ShopProducts";
import ShopServices from "../components/features/ShopServices";
import Footer from "../components/layouts/Footer";

const Shop = () => {
  return (
    <>
      <Navbar />
      <ShopHeroSection />
      <ShopFilterBar />
      <ShopProducts />
      <ShopServices />
      <Footer />
    </>
  );
};

export default Shop;
