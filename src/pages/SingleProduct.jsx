import { useParams } from "react-router-dom";
import { productData } from "/src/data/Data";
import Navbar from "../components/layouts/Navbar";
import { RightArrow } from "/src/assets/Svg";

export default function SingleProduct() {
  const { id } = useParams();
 
  const baseId = id.split("-")[0];
  const product = productData.find((p) => String(p.id) === baseId);

  if (!product) return <p>Product not found.</p>;

  return (
    <>
    <Navbar/>
    <section>
        <div className="w-full h-[100px] bg-[#F9F1E7] py-8 px-20">
           <nav className="flex items-center gap-2  text-center">
          <a
            href="/"
            className="text-[#000000] text-[16px] hover:text-[#B88E2F] 
            font-medium leading-[100%] transition-colors duration-200">
            Home
          </a>
          <RightArrow/>
          
          <a
            href="/shop"
            className="text-[#000000] text-[16px] hover:text-[#B88E2F]
            font-medium leading-[100%] transition-colors duration-200">
            Shop
          </a>
            <RightArrow/>
        </nav> 
        </div>
      {/* <div className="max-w-[1240px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
       
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-cover rounded"
        />
       
        <div className="flex flex-col gap-6">
          <h1 className="text-[36px] font-bold text-[#3A3A3A]">{product.name}</h1>
          <p className="text-[#898989] text-[16px]">{product.description}</p>
          <div className="flex items-center gap-6">
            <span className="text-[28px] font-semibold text-[#3A3A3A]">{product.price}</span>
            {product.originalPrice && (
              <span className="text-[#B0B0B0] text-[18px] line-through">{product.originalPrice}</span>
            )}
          </div>
          <button className="bg-[#B88E2F] text-white px-10 py-3 text-[16px] font-semibold hover:bg-[#a07828] transition-colors w-fit">
            Add to Cart
          </button>
        </div>
      </div>
      </div> */}
    </section>
    </>
    
  );
}