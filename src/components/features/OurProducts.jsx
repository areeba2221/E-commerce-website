import { useState } from "react";
import { productsData, productsSectionData } from "/src/data/Data";

import {
  ShareIcon,
  CompareIcon,
  ProductHeartIcon,
} from "/src/assets/Svg";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-[#F4F5F7] rounded-sm overflow-hidden cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      
      <div className="relative overflow-hidden aspect-4/3">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 
          group-hover:scale-105" />
        {product.badge && (
          <span
            className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center
               justify-center text-white text-xs font-semibold z-10
              ${product.badge.type === "new" ? "bg-[#2EC1AC]" : "bg-[#E97171]"}`}>
            {product.badge.label}
          </span>
        )}
        <div
          className={`absolute inset-0 bg-[#3A3A3A] flex flex-col items-center justify-center 
            gap-4 transition-opacity duration-300
            ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <button className="bg-white text-[#B88E2F] font-semibold text-[16px] px-10 py-3
           hover:bg-[#B88E2F] hover:text-white transition-colors duration-200">
            Add to cart
          </button>
          <div className="flex items-center gap-4 text-white text-sm font-medium">
            <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <ShareIcon /> Share
            </button>
            <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <CompareIcon /> Compare
            </button>
            <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <ProductHeartIcon /> Like
            </button>
          </div>
        </div>
      </div>

      <div className="p-4 pb-6">
        <h3 className="font-bold text-[#3A3A3A] text-[24px] mb-1">{product.name}</h3>
        <p className="text-[#898989] text-[16px] mb-3 font-medium">{product.description}</p>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-[#3A3A3A] text-lg">{product.price}</span>
          {product.originalPrice && (
            <span className="text-[#B0B0B0] text-sm line-through">{product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OurProducts() {
  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
    
      <h2
        className="text-center font-bold text-[40px] text-[#3A3A3A] mb-10">
        {productsSectionData.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {productsData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="border w-61.25 h-12 border-[#B88E2F] text-[#B88E2F] font-semibold px-16 py-3 
        text-[16px] leading-[150%] tracking-widest hover:bg-[#B88E2F] hover:text-white transition-colors duration-200">
          {productsSectionData.buttonText}
        </button>
      </div>
    </section>
  );
}