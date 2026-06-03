import { Link } from "react-router-dom";
import { useCart } from "/src/context/CartContext";
import { TrashIcon } from "/src/assets/Svg";

export default function CartSection() {
  const { cartItems, removeFromCart, subtotal, setCartItems } = useCart();

  const updateQuantity = (id, size, color, value) => {
    const qty = Math.max(1, parseInt(value) || 1);
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.size === size && item.color === color
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  return (
    <div className="py-[72px] bg-white font-Poppins">

      <div className="max-w-[1440px] mx-auto  px-16 pb-10">

        {cartItems.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-[20px] text-[#9F9F9F] mb-6">Your cart is empty.</p>
            <Link to="/shop"
              className="border border-black px-8 py-3 rounded-[10px] hover:bg-black hover:text-white transition-all">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="flex flex-row gap-8">

            <div className="flex-1">

              <div className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] bg-[#F9F1E7] rounded-[5px] 
                px-6 py-5 mb-4 text-[16px] font-medium text-black">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span></span>
              </div>

              <div className="flex flex-col gap-4">
                {cartItems.map((item, i) => {
                  const price = parseFloat(String(item.price).replace(/[^0-9.]/g, ""));
                  const lineTotal = price * item.quantity;

                  return (
                    <div key={`${item.id}-${item.size}-${item.color}`}
                      className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] items-center 
                      px-6 py-4 rounded-[10px] bg-white border border-transparent 
                      hover:border-[#F9F1E7] duration-300 ease-in-out">

                      <div className="flex items-center gap-4">
                        <div className="w-[105px] h-[105px] bg-[#F9F1E7] rounded-[10px] 
                          flex items-center justify-center p-3 flex-shrink-0">
                          <img src={item.image} alt={item.name}
                            className="w-full h-full object-contain mix-blend-multiply" />
                        </div>
                        <span className="text-[16px] text-[#9F9F9F]">{item.name}</span>
                      </div>

                      <span className="text-[16px] text-[#9F9F9F]">
                        Rs. {price.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
                      </span>

                      <div>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, item.size, item.color, e.target.value)}
                          className="w-[60px] h-[60px] border border-[#9F9F9F] rounded-[10px] 
                          text-center text-[16px] font-medium focus:outline-none 
                          focus:border-[#B88E2F] transition-colors"
                        />
                      </div>

                      <span className="text-[16px] text-black font-medium">
                        Rs. {lineTotal.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
                      </span>

                      <button
                        onClick={() => removeFromCart(item.id, item.size, item.color)}
                        className="hover:scale-110 transition-transform">
                        <TrashIcon />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full lg:w-[393px] bg-[#F9F1E7] rounded-[10px] p-10 h-fit">
              <h2 className="text-[32px] font-semibold text-black text-center mb-10">Cart Totals</h2>

              <div className="flex justify-between items-center mb-6">
                <span className="text-[16px] font-medium text-black">Subtotal</span>
                <span className="text-[16px] text-[#9F9F9F]">
                  Rs. {subtotal.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
                </span>
              </div>

              <div className="flex justify-between items-center mb-10">
                <span className="text-[16px] font-medium text-black">Total</span>
                <span className="text-[20px] font-medium text-[#B88E2F]">
                  Rs. {subtotal.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
                </span>
              </div>

              <Link to="/checkout"
                className="block w-full text-center border border-black rounded-[15px] 
                py-4 text-[20px] hover:bg-black hover:text-white transition-all">
                Check Out
              </Link>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

