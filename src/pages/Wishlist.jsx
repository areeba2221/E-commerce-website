import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toggleLikeProduct } from "/src/features/likes/likesSlice";
import Navbar from "/src/components/layouts/Navbar";
import Footer from "/src/components/layouts/Footer";

export default function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const likedProducts = useSelector((state) => state.likes.items);

  return (
    <div className="min-h-screen bg-[#FCFCFC]">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#3A3A3A]">Wishlist</h1>
            <p className="text-[#898989] mt-2">
              {likedProducts.length > 0
                ? `${likedProducts.length} product${likedProducts.length > 1 ? "s" : ""} saved for later.`
                : "You have not liked any products yet."}
            </p>
          </div>

          <button
            onClick={() => navigate("/shop")}
            className="border border-[#B88E2F] text-[#B88E2F] px-6 py-3 rounded-lg hover:bg-[#B88E2F] hover:text-white transition-colors"
          >
            Continue Shopping
          </button>
        </div>

        {likedProducts.length === 0 ? (
          <div className="bg-white border border-dashed border-[#D9D9D9] rounded-2xl py-16 text-center">
            <p className="text-[#898989] text-lg">No liked products yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {likedProducts.map((product) => (
              <div key={product._id} className="bg-white rounded-2xl shadow-sm border border-[#F0F0F0] overflow-hidden">
                <div className="aspect-[4/3] bg-[#F4F5F7]">
                  <img
                    src={product.image || "/placeholder.png"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-[#3A3A3A] mb-2">{product.name}</h3>
                  <p className="text-[#B88E2F] font-semibold mb-4">Rs. {product.price?.toLocaleString()}</p>

                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/product/${product._id}`)}
                      className="flex-1 border border-[#B88E2F] text-[#B88E2F] px-4 py-2 rounded-lg hover:bg-[#B88E2F] hover:text-white transition-colors"
                    >
                      View Product
                    </button>
                    <button
                      onClick={() => {
                        dispatch(toggleLikeProduct(product));
                        toast.success("Removed from wishlist");
                      }}
                      className="px-4 py-2 rounded-lg bg-[#F9F1E7] text-[#B88E2F] hover:bg-[#f1dfbf] transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
