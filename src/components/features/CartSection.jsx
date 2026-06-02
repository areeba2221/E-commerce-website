import React from "react";

const CartSection = () => {
    return (
        <>
        <div className="px-25 py-20">
            <div className="w-[817px] h-[55px]  flex-1">
                <div className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] bg-[#F9F1E7] rounded-[5px] 
                px-6 py-5 mb-4 text-[16px] font-medium text-black">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Subtotal</span>
                <span></span>
              </div>


            </div>

        </div>
        
        </>
    );
}
 
export default CartSection;