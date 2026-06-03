import { CheckoutData } from "/src/data/Data";
import { useState } from "react";
import { useCart } from "/src/context/CartContext";

const CheckoutSection = () => {
    const [paymentMethod, setPaymentMethod] = useState("bank");
    const { cartItems, subtotal } = useCart();

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="gap-16 py-24 px-20 ml-20">
                    <h1 className="text-[36px] font-bold font-Poppins leading-[100%] text-[#000000]">
                        Billing details
                    </h1>

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-42 mt-9 mb-4">
                            <h3 className="text-black text-[16px] font-semibold leading-[100%]">First Name</h3>
                            <h3 className="text-black text-[16px] font-semibold leading-[100%]">Last Name</h3>
                        </div>
                        <div className="flex gap-8">
                            <input type="text" placeholder="First Name"
                                className="w-[211px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all" />
                            <input type="text" placeholder="Last Name"
                                className="w-[211px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-black text-[16px] font-semibold leading-[100%] mt-9 mb-2">Company Name (Optional)</h3>
                        <input type="text"
                            className="w-[453px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all" />
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-black text-[16px] font-semibold leading-[100%] mt-9 mb-2">Country / Region</h3>
                        <select className="text-gray-400 w-[453px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all">
                            {CheckoutData.sortOptions.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-black text-[16px] font-semibold leading-[100%] mt-9 mb-2">Street address</h3>
                        <input type="text"
                            className="w-[453px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all" />
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-black text-[16px] font-semibold leading-[100%] mt-9 mb-2">Town / City</h3>
                        <input type="text"
                            className="w-[453px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all" />
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-black text-[16px] font-semibold leading-[100%] mt-9 mb-2">Province</h3>
                        <select className="text-gray-400 w-[453px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all">
                            {CheckoutData.sortOptionProvince.map((option) => (
                                <option key={option}>{option}</option>
                            ))}
                        </select>
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-black text-[16px] font-semibold leading-[100%] mt-9 mb-2">ZIP code</h3>
                        <input type="text"
                            className="w-[453px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all" />
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-black text-[16px] font-semibold leading-[100%] mt-9 mb-2">Phone</h3>
                        <input type="tel"
                            className="w-[453px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all" />
                    </div>

                    <div className="flex flex-col gap-5">
                        <h3 className="text-black text-[16px] font-semibold leading-[100%] mt-9 mb-2">Email address</h3>
                        <input type="email"
                            className="w-[453px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all" />
                    </div>

                    <input type="text" placeholder="Additional information"
                        className="w-[453px] h-19 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all mt-17" />
                </div>

                <div className="w-[608px] py-24 mr-8">

                    <div className="flex justify-between mb-5">
                        <h1 className="text-[24px] leading-[100%] font-semibold font-Poppins">Product</h1>
                        <h1 className="text-[24px] leading-[100%] font-semibold font-Poppins">Subtotal</h1>
                    </div>

                    {cartItems.map((item, i) => {
                        const price = parseFloat(String(item.price).replace(/[^0-9.]/g, ""));
                        const lineTotal = price * item.quantity;
                        return (
                            <div key={i} className="flex justify-between mt-5">
                                <h1 className="text-[16px] font-normal text-[#9F9F9F] font-Poppins">
                                    {item.name}
                                    <span className="ml-2 text-black">X</span>
                                    <span className="ml-2 text-black">{item.quantity}</span>
                                </h1>
                                <h1 className="text-[16px] font-light text-black font-Poppins">
                                    Rs. {lineTotal.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
                                </h1>
                            </div>
                        );
                    })}

                    <div className="flex justify-between mt-5">
                        <h1 className="text-[16px] font-normal text-black font-Poppins">Subtotal</h1>
                        <h1 className="text-[16px] font-light text-black font-Poppins">
                            Rs. {subtotal.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
                        </h1>
                    </div>

                    <div className="flex justify-between mt-5 pb-10 border-b border-[#D9D9D9] mb-5">
                        <h1 className="text-[16px] font-normal text-black font-Poppins">Total</h1>
                        <h1 className="text-[24px] font-bold text-[#B88E2F] font-Poppins">
                            Rs. {subtotal.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
                        </h1>
                    </div>

                    <div className="flex">
                        <input type="radio" name="payment" value="bank"
                            checked={paymentMethod === "bank"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="accent-black" />
                        <h1 className="text-[16px] font-medium text-[#000000] ml-4">Direct Bank Transfer</h1>
                    </div>

                    <p className="w-[528px] text-[16px] text-[#9F9F9F] font-light leading-relaxed mt-3">
                        Make your payment directly into our bank account. Please use your Order ID as the
                        payment reference. Your order will not be shipped until the funds have cleared in our account.
                    </p>

                    <div className="flex mt-6">
                        <input type="radio" name="payment" value="transfer"
                            checked={paymentMethod === "transfer"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="accent-black" />
                        <h1 className="text-[16px] font-medium text-[#9F9F9F] ml-4">Bank Transfer</h1>
                    </div>

                    <div className="flex mt-3">
                        <input type="radio" name="payment" value="cod"
                            checked={paymentMethod === "cod"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="accent-black" />
                        <h1 className="text-[16px] font-medium text-[#9F9F9F] ml-4">Cash On Delivery</h1>
                    </div>

                    <p className="w-[529px] text-[16px] font-normal leading-relaxed text-[#000000] mt-5">
                        Your personal data will be used to support your experience throughout this website, to manage
                        access to your account, and for other purposes described in our{" "}
                        <span className="font-semibold cursor-pointer">privacy policy.</span>
                    </p>

                    <div className="flex justify-center items-center mt-12 mr-8">
                        <button className="w-[318px] h-16 px-12 border border-black rounded-[15px]
                            text-[20px] hover:bg-black hover:text-white transition-all">
                            Place order
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CheckoutSection;