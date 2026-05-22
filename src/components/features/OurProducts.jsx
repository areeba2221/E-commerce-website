import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    badge: { label: "-30%", type: "discount" },
    image: "/src/assets/syltherines.png",
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: null,
    badge: null,
    image: "/src/assets/image 2.png",
    hovered: true,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: { label: "-50%", type: "discount" },
    image: "/src/assets/Lolito.png",
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: null,
    badge: { label: "New", type: "new" },
    image: "/src/assets/Respira.png",
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: null,
    badge: null,
    image: "/src/assets/Grifo.png",
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    originalPrice: null,
    badge: { label: "New", type: "new" },
    image: "/src/assets/Muggo.png",
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: { label: "-50%", type: "discount" },
    image: "/src/assets/Pingky.png",
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: null,
    badge: { label: "New", type: "new" },
    image: "/src/assets/Potty.png",
  },
];

function ShareIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
    </svg>
  );
}

function CompareIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  );
}

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-[#F4F5F7] rounded-sm overflow-hidden cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span
            className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-semibold z-10
              ${product.badge.type === "new" ? "bg-[#2EC1AC]" : "bg-[#E97171]"}`}>
            {product.badge.label}
          </span>
        )}
        <div
          className={`absolute inset-0 bg-black/40 flex flex-col items-center justify-center gap-4 transition-opacity duration-300
            ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <button className="bg-white text-[#B88E2F] font-semibold text-sm px-10 py-3 hover:bg-[#B88E2F] hover:text-white transition-colors duration-200">
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
              <HeartIcon /> Like
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
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="border w-[245px] h-[48px] border-[#B88E2F] text-[#B88E2F] font-semibold px-16 py-3 
        text-[16px] leading-[150%] tracking-widest hover:bg-[#B88E2F] hover:text-white transition-colors duration-200">
          Show More
        </button>
      </div>
    </section>
  );
}