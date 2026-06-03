import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { productsData } from "/src/data/Data";

import {
  ShareIcon,
  CompareIcon,
  ProductHeartIcon,
} from "/src/assets/Svg";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); 

  const handleAction = (e, callback) => {
    e.stopPropagation();
    if (callback) callback();
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-[#F4F5F7] overflow-hidden cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      
      <div className="relative overflow-hidden aspect-285/301">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        {product.badge && (
          <span
            className={`absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white text-[15px] font-medium z-10
              ${product.badge.type === "new" ? "bg-[#2EC1AC]" : "bg-[#E97171]"}`}>
            {product.badge.label}
          </span>
        )}
     
        <div
          className={`absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center justify-center gap-6 transition-opacity duration-300 z-20
            ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <button 
            onClick={(e) => handleAction(e, () => console.log("Added to cart"))}
            className="bg-white text-[#B88E2F] font-semibold text-[16px] px-14 py-3 shadow-md hover:bg-[#B88E2F] hover:text-white transition-colors duration-200">
            Add to cart
          </button>
          <div className="flex items-center gap-5 text-white text-[16px] font-semibold">
            <button 
              onClick={(e) => handleAction(e, () => console.log("Shared"))}
              className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <ShareIcon /> Share
            </button>
            <button 
              onClick={(e) => handleAction(e, () => console.log("Compared"))}
              className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <CompareIcon /> Compare
            </button>
            <button 
              onClick={(e) => handleAction(e, () => console.log("Liked"))}
              className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <ProductHeartIcon /> Like
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 pt-6 pb-8 pl-6">
        <h3 className="font-bold text-[#3A3A3A] text-[24px] mb-2">{product.name}</h3>
        <p className="text-[#898989] text-[16px] mb-2 font-medium">{product.description}</p>
        <div className="flex items-center justify-between pr-4">
          <span className="font-semibold text-[#3A3A3A] text-[20px]">{product.price}</span>
          {product.originalPrice && (
            <span className="text-[#B0B0B0] text-[16px] line-through">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ShopProducts () {
  const repeatedProducts = [ ...productsData, ...productsData]
  .map((prod, index) => ({
    ...prod,
    id: `${prod.id}-${index}` 
  }));

  return (
    <section className="py-16 px-4 max-w-[1240px] mx-auto flex flex-col items-center gap-16">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {repeatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>


      <div className="flex items-center gap-8 mt-4 text-[20px]">
        <button className="w-14 h-14 bg-[#B88E2F] text-white rounded-[10px] flex items-center justify-center font-normal transition-colors">
          1
        </button>
        <button className="w-14 h-14 bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-black rounded-[10px] flex items-center justify-center font-normal transition-colors">
          2
        </button>
        <button className="w-14 h-14 bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-black rounded-[10px] flex items-center justify-center font-normal transition-colors">
          3
        </button>
        <button className="px-7 h-14 bg-[#F9F1E7] hover:bg-[#B88E2F] hover:text-white text-black rounded-[10px] flex items-center justify-center font-light transition-colors">
          Next
        </button>
      </div>

    </section>
  );
}
