import Navbar from "../components/layouts/Navbar";
import ShowProduct from "../components/features/ShowProduct";
import ProductDesciption from "../components/features/ProductDescription";
import RelatedProduct from "../components/features/RelatedProduct";
import Footer from "../components/layouts/Footer";

const SingleProduct = () => {
  return ( 
    <>
    <Navbar/>
    <ShowProduct/>
    <ProductDesciption/>
    <RelatedProduct/>
    <Footer />
    </>
   );
}
 
export default SingleProduct;