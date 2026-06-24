import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts } from "/src/api/productAPI";
import { useCart } from "/src/context/CartContext";
import { productsSectionData } from "/src/data/Data";
import { ShareIcon, CompareIcon, ProductHeartIcon } from "/src/assets/Svg";

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <div
      onClick={() => navigate(`/product/${product._id}`)}
      className="group bg-[#F4F5F7] rounded-sm overflow-hidden cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <div className="relative overflow-hidden aspect-4/3">
        <img
          src={product.images?.[0]?.url || "/placeholder.png"}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className={`absolute top-3 right-3 flex flex-col gap-2 z-10 transition-opacity duration-300
          ${isHovered ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          {product.comparePrice && (
            <span className="w-10 h-10 rounded-full flex items-center justify-center
              text-white text-xs font-semibold bg-[#E97171]">
              Sale
            </span>
          )}
          {product.tags?.includes("new") && (
            <span className="w-10 h-10 rounded-full flex items-center justify-center
              text-white text-xs font-semibold bg-[#2EC1AC]">
              New
            </span>
          )}
        </div>

        <div className={`absolute inset-0 bg-[#3A3A3A] bg-opacity-70 flex flex-col items-center
          justify-center gap-4 transition-opacity duration-300
          ${isHovered ? "opacity-100" : "opacity-0"}`}>
          <button
            onClick={(e) => {
              e.stopPropagation();

              addToCart({
                _id: product._id,
                name: product.name,
                price: product.price,
                image: product.images?.[0]?.url,
                quantity: 1,
              });
            }}

            className="bg-white text-[#B88E2F] font-semibold text-[16px] px-10 py-3
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
          <span className="font-semibold text-[#3A3A3A] text-lg">
            Rs. {product.price?.toLocaleString()}
          </span>
          {product.comparePrice && (
            <span className="text-[#B0B0B0] text-sm line-through">
              Rs. {product.comparePrice?.toLocaleString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function OurProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const LIMIT = 8;

  const fetchProducts = (pageNum, isLoadMore = false) => {
    isLoadMore ? setLoadingMore(true) : setLoading(true);

    getProducts(`?page=${pageNum}&limit=${LIMIT}`)
      .then(res => {
        const data = res.data?.data || [];
        const totalPages = res.data?.pagination?.totalPages || 1;

        if (isLoadMore) {
          setProducts(prev => [...prev, ...data]);
        } else {
          setProducts(data);
        }

        setHasMore(pageNum < totalPages);
        isLoadMore ? setLoadingMore(false) : setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setError("Products is not load");
        isLoadMore ? setLoadingMore(false) : setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts(1);
  }, []);

  const handleShowMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchProducts(nextPage, true);
  };

  if (loading) return <p className="text-center py-16">Loading...</p>;
  if (error) return <p className="text-center py-16 text-red-500">{error}</p>;

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">

      <h2 className="text-center font-bold text-[40px] text-[#3A3A3A] mb-10">
        {productsSectionData.title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        {hasMore ? (
          <button
            onClick={handleShowMore}
            disabled={loadingMore}
            className="border w-61.25 h-12 border-[#B88E2F] text-[#B88E2F] font-semibold
              px-16 py-3 text-[16px] leading-[150%] tracking-widest
              hover:bg-[#B88E2F] hover:text-white transition-colors duration-200
              disabled:opacity-50 disabled:cursor-not-allowed">
            {loadingMore ? "Loading..." : productsSectionData.buttonText}
          </button>
        ) : (
          products.length > LIMIT && (
            <p className="text-[#9F9F9F] text-[16px]">All products loaded</p>
          )
        )}
      </div>

    </section>
  );
}