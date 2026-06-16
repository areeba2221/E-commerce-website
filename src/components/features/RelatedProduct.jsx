import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProducts } from "/src/api/productAPI";
import { productsSectionData } from "/src/data/Data";
import { ShareIcon, CompareIcon, ProductHeartIcon } from "/src/assets/Svg";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleAction = (e, callback) => {
    e.stopPropagation();
    if (callback) callback();
  };

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className="group bg-[#F4F5F7] overflow-hidden cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-285/301">
        <img
          src={product.images?.[0]?.url || "/placeholder.png"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {product.comparePrice && (
          <span className="absolute top-5 right-5 w-12 h-12 rounded-full flex items-center
            justify-center text-white text-[15px] font-medium z-10 bg-[#E97171]">
            Sale
          </span>
        )}
        {product.tags?.includes("new") && (
          <span className="absolute top-5 right-5 w-12 h-12 rounded-full flex items-center
            justify-center text-white text-[15px] font-medium z-10 bg-[#2EC1AC]">
            New
          </span>
        )}

        <div className={`absolute inset-0 bg-[#3A3A3A]/70 flex flex-col items-center 
          justify-center gap-6 transition-opacity duration-300 z-20
          ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <button
            onClick={(e) => handleAction(e, () => console.log("Added to cart:", product._id))}
            className="bg-white text-[#B88E2F] font-semibold text-[16px] px-14 py-3 
              shadow-md hover:bg-[#B88E2F] hover:text-white transition-colors duration-200">
            Add to cart
          </button>
          <div className="flex items-center gap-5 text-white text-[16px] font-semibold">
            <button onClick={(e) => handleAction(e, () => console.log("Shared"))}
              className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <ShareIcon /> Share
            </button>
            <button onClick={(e) => handleAction(e, () => console.log("Compared"))}
              className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
              <CompareIcon /> Compare
            </button>
            <button onClick={(e) => handleAction(e, () => console.log("Liked"))}
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
          <span className="font-semibold text-[#3A3A3A] text-[20px]">
            Rs. {product.price?.toLocaleString()}
          </span>
          {product.comparePrice && (
            <span className="text-[#B0B0B0] text-[16px] line-through">
              Rs. {product.comparePrice?.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

const RelatedProduct = () => {
  const { id } = useParams();   
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    setLoading(true);

    getProducts(`?limit=4`)
      .then(res => {
        const data = res.data?.data || [];
        setRelatedProducts(data);    
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError("Related products is not load");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-16">Loading...</p>;
  if (error)   return <p className="text-center py-16 text-red-500">{error}</p>;
  if (relatedProducts.length === 0) return null;

  return (
    <div className="border-t border-[#D9D9D9] mt-4 font-Poppins">

      <div className="text-center p-10 mt-10 text-[36px] text-[#000000] font-medium">
        Related Products
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full px-25">
        {relatedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="border w-61.25 h-12 border-[#B88E2F] mb-25 text-[#B88E2F] font-semibold 
          px-16 py-3 text-[16px] leading-[150%] tracking-widest 
          hover:bg-[#B88E2F] hover:text-white transition-colors duration-200">
          {productsSectionData.buttonText}
        </button>
      </div>

    </div>
  );
};

export default RelatedProduct;