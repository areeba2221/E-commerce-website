import { Link } from "react-router-dom";
import { useCart } from "/src/context/CartContext";
import { TrashIcon } from "/src/assets/Svg";
import Swal from "sweetalert2";

export default function CartSection() {
  const { cartItems, removeFromCart, subtotal, updateQuantity } = useCart();

  // const updateQuantity = (id, size, color, value) => {
  //   const qty = Math.max(1, parseInt(value) || 1);
  //   setCartItems(prev =>
  //     prev.map(item =>
  //       (item._id === id || item.id === id)
  //       && item.size  === size
  //       && item.color === color
  //         ? { ...item, quantity: qty }
  //         : item
  //     )
  //   );
  // };

  return (
    <div className="py-18 bg-white font-Poppins">
      <div className="max-w-360 mx-auto px-16 pb-10">
        {cartItems.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-[20px] text-[#9F9F9F] mb-6">
              Your cart is empty.
            </p>
            <Link
              to="/shop"
              className="border border-black px-8 py-3 rounded-[10px] 
                hover:bg-black hover:text-white transition-all"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-row gap-8">
            <div className="flex-1">
              <div
                className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] bg-[#F9F1E7] 
                rounded-[5px] px-6 py-5 mb-4 text-[16px] font-medium text-black"
              >
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span></span>
              </div>

              <div className="flex flex-col gap-4">
                {cartItems.map((item, i) => {
                  const price = Number(item.price) || 0;
                  const lineTotal = price * item.quantity;
                  const itemId = item._id || item.id;

                  return (
                    <div
                      key={`${itemId}-${item.size}-${item.color}`}
                      className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] items-center
                        px-6 py-4 rounded-[10px] bg-white border border-transparent
                        hover:border-[#F9F1E7] duration-300 ease-in-out"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-26.25 h-26.25 bg-[#F9F1E7] rounded-[10px]
                          flex items-center justify-center p-3 shrink-0"
                        >
                          <img
                            src={
                              item.images?.[0]?.url ||
                              item.image ||
                              "/placeholder.png"
                            }
                            alt={item.name}
                            className="w-full h-full object-contain mix-blend-multiply"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[16px] text-[#9F9F9F]">
                            {item.name}
                          </span>
                          {item.size && (
                            <span className="text-[12px] text-[#9F9F9F]">
                              Size: {item.size}
                            </span>
                          )}
                          {item.color && (
                            <span className="text-[12px] text-[#9F9F9F]">
                              Color: {item.color}
                            </span>
                          )}
                        </div>
                      </div>

                      <span className="text-[16px] text-[#9F9F9F]">
                        Rs.{" "}
                        {price.toLocaleString("en-PK", {
                          minimumFractionDigits: 2,
                        })}
                      </span>

                      <div>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => {
                            const qty = Math.max(
                              1,
                              parseInt(e.target.value) || 1,
                            );
                            updateQuantity(itemId, qty);
                          }}
                          className="w-15 h-15 border border-[#9F9F9F] rounded-[10px]
                            text-center text-[16px] font-medium focus:outline-none
                            focus:border-[#B88E2F] transition-colors"
                        />
                      </div>

                      <span className="text-[16px] text-black font-medium">
                        Rs.{" "}
                        {lineTotal.toLocaleString("en-PK", {
                          minimumFractionDigits: 2,
                        })}
                      </span>

                      <button
                        onClick={() => {
                          Swal.fire({
                            title: "Remove item?",
                            text: "Are you sure you want to remove this item from your cart?",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#B88E2F",
                            cancelButtonColor: "#9F9F9F",
                            confirmButtonText: "Yes, remove it",
                            cancelButtonText: "Cancel",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              removeFromCart(itemId);
                            }
                          });
                        }}
                        className="hover:scale-110 transition-transform"
                      >
                        <TrashIcon />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full lg:w-98 bg-[#F9F1E7] rounded-[10px] p-10 h-fit">
              <h2 className="text-[32px] font-semibold text-black text-center mb-10">
                Cart Totals
              </h2>

              <div className="flex justify-between items-center mb-6">
                <span className="text-[16px] font-medium text-black">
                  Subtotal
                </span>
                <span className="text-[16px] text-[#9F9F9F]">
                  Rs.{" "}
                  {subtotal?.toLocaleString("en-PK", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>

              <div className="flex justify-between items-center mb-10">
                <span className="text-[16px] font-medium text-black">
                  Total
                </span>
                <span className="text-[20px] font-medium text-[#B88E2F]">
                  Rs.{" "}
                  {subtotal?.toLocaleString("en-PK", {
                    minimumFractionDigits: 2,
                  })}
                </span>
              </div>

              <Link
                to="/checkout"
                className="block w-full text-center border border-[#B88E2F] rounded-[15px]
                  py-4 text-[20px] hover:bg-[#B88E2F] hover:text-white transition-all"
              >
                Check Out
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
