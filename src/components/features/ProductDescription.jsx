import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "/src/api/productAPI";

const ProductDescription = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    getProduct(id)
      .then((res) => {
        setProduct(res.data?.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-16">Loading...</p>;
  if (!product) return null;

  const attributes = product.attributes
    ? product.attributes instanceof Map
      ? Object.fromEntries(product.attributes)
      : product.attributes
    : {};

  return (
    <section className="border-t border-[#D9D9D9] font-Poppins">
      <div className="flex justify-center items-center p-4 py-[48px] gap-12">
        <button
          onClick={() => setActiveTab("description")}
          className={`font-medium text-[24px] transition-colors ${
            activeTab === "description" ? "text-black" : "text-[#9F9F9F]"
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("additional")}
          className={`font-normal text-[24px] transition-colors ${
            activeTab === "additional" ? "text-black" : "text-[#9F9F9F]"
          }`}
        >
          Additional Information
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`font-normal text-[24px] transition-colors ${
            activeTab === "reviews" ? "text-black" : "text-[#9F9F9F]"
          }`}
        >
          Reviews [{product.ratings?.count || 0}]
        </button>
      </div>

      {activeTab === "description" && (
        <>
          <p className="px-[200px] text-[#9F9F9F] text-[16px] mb-7">
            {product.additionalInformation}
          </p>

          {product.images?.length > 0 && (
            <div className="flex justify-center items-center gap-7 p-4">
              {product.images.slice(0, 2).map((img, index) => (
                <div
                  key={index}
                  className="relative w-[560px] h-[330px] bg-[#F9F1E7] rounded-[10px]"
                >
                  <img
                    src={img.url}
                    alt={img.altText || product.name}
                    className="w-full h-full object-cover absolute rounded-[10px]"
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}

      {activeTab === "additional" && (
        <div className="px-[207px] pb-12">
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-[#D9D9D9]">
                <td className="py-4 text-[16px] font-medium text-black w-1/3">
                  Brand
                </td>
                <td className="py-4 text-[16px] text-[#9F9F9F]">
                  {product.brand || "N/A"}
                </td>
              </tr>
              <tr className="border-b border-[#D9D9D9]">
                <td className="py-4 text-[16px] font-medium text-black w-1/3">
                  SKU
                </td>
                <td className="py-4 text-[16px] text-[#9F9F9F]">
                  {product.sku || "N/A"}
                </td>
              </tr>
              <tr className="border-b border-[#D9D9D9]">
                <td className="py-4 text-[16px] font-medium text-black w-1/3">
                  Category
                </td>
                <td className="py-4 text-[16px] text-[#9F9F9F]">
                  {product.category}
                </td>
              </tr>
              <tr className="border-b border-[#D9D9D9]">
                <td className="py-4 text-[16px] font-medium text-black w-1/3">
                  Tags
                </td>
                <td className="py-4 text-[16px] text-[#9F9F9F]">
                  {product.tags?.join(", ") || "N/A"}
                </td>
              </tr>
              <tr className="border-b border-[#D9D9D9]">
                <td className="py-4 text-[16px] font-medium text-black w-1/3">
                  Stock
                </td>
                <td className="py-4 text-[16px] text-[#9F9F9F]">
                  {product.stock > 0
                    ? `${product.stock} available`
                    : "Out of Stock"}
                </td>
              </tr>

              {Object.entries(attributes).map(([key, value]) => (
                <tr key={key} className="border-b border-[#D9D9D9]">
                  <td className="py-4 text-[16px] font-medium text-black w-1/3 capitalize">
                    {key}
                  </td>
                  <td className="py-4 text-[16px] text-[#9F9F9F]">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* {Object.keys(attributes).length === 0 && (
            <p className="text-[#9F9F9F] text-center mt-8">
              No additional information available
            </p>
          )} */}
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="px-[207px] pb-12">
          {product.reviews?.length > 0 ? (
            <div className="flex flex-col gap-6">
              {product.reviews.map((review, index) => (
                <div key={index} className="border-b border-[#D9D9D9] pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-black text-[16px]">
                      {review.name}
                    </span>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <span
                          key={s}
                          className={
                            s <= review.rating
                              ? "text-[#B88E2F]"
                              : "text-[#D9D9D9]"
                          }
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[#9F9F9F] text-[14px]">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-[#9F9F9F] text-center">No reviews yet</p>
          )}
        </div>
      )}
    </section>
  );
};

export default ProductDescription;
