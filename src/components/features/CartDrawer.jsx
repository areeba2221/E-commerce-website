import { useCart } from "/src/context/CartContext";
import { Link } from "react-router-dom";
import { Cross, CircleCross } from "/src/assets/Svg";

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, removeFromCart, subtotal } = useCart();

  return (
    <>
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsCartOpen(false)}
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-100 bg-white z-50 shadow-2xl
        transform transition-transform duration-300 font-Poppins
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex items-center justify-between px-8 py-6 border-b border-[#D9D9D9]">
          <h2 className="text-[24px] font-semibold">Shopping Cart</h2>
          <button onClick={() => setIsCartOpen(false)} className="text-[#9F9F9F] hover:text-black">
            <Cross />
          </button>
        </div>

        <div className="flex flex-col gap-6 px-8 py-6 overflow-y-auto max-h-[calc(100vh-220px)]">
          {cartItems.length === 0 ? (
            <p className="text-[#9F9F9F] text-center mt-10">Your cart is empty.</p>
          ) : (
            cartItems.map((item, i) => (
              <div key={i} className="flex items-center gap-4">

                <div className="w-26.25 h-26.25 bg-[#F9F1E7] rounded-[10px] flex items-center justify-center p-2 shrink-0">
                  <img
                    src={
                      item.images?.[0]?.url ||  
                      item.image            ||  
                      "/placeholder.png"        
                    }
                    alt={item.name}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>

                <div className="flex-1">
                  <p className="text-[16px] font-medium text-black">{item.name}</p>
                  <p className="text-[14px] text-[#9F9F9F] mt-1">
                    {item.quantity} x{" "}
                    <span className="text-[#B88E2F]">
                      Rs. {Number(item.price)?.toLocaleString()}  
                    </span>
                  </p>
                  {item.size && (
                    <p className="text-[12px] text-[#9F9F9F]">Size: {item.size}</p>
                  )}
                  {item.color && (
                    <p className="text-[12px] text-[#9F9F9F]">Color: {item.color}</p>
                  )}
                </div>

                <button
                  onClick={() => removeFromCart(
                    item._id || item.id,   // ← _id pehle try karo
                    item.size,
                    item.color
                  )}
                  className="w-6 h-6 rounded-full bg-[#9F9F9F] flex items-center justify-center hover:bg-black transition-colors shrink-0">
                  <CircleCross />
                </button>

              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 px-8 py-6 border-t border-[#D9D9D9] bg-white">
            <div className="flex justify-between items-center mb-6">
              <span className="text-[16px] text-black">Subtotal</span>
              <span className="text-[16px] font-semibold text-[#B88E2F]">
                Rs. {subtotal?.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
              </span>
            </div>
            <div className="flex gap-3">
              <Link to="/cart" onClick={() => setIsCartOpen(false)}
                className="flex-1 text-center border border-black rounded-full py-2 text-[13px] hover:bg-black hover:text-white transition-all">
                Cart
              </Link>
              <Link to="/checkout" onClick={() => setIsCartOpen(false)}
                className="flex-1 text-center border border-black rounded-full py-2 text-[13px] hover:bg-black hover:text-white transition-all">
                Checkout
              </Link>
              <Link to="/comparison" onClick={() => setIsCartOpen(false)}
                className="flex-1 text-center border border-black rounded-full py-2 text-[13px] hover:bg-black hover:text-white transition-all">
                Comparison
              </Link>
            </div>
          </div>
        )}

      </div>
    </>
  );
}