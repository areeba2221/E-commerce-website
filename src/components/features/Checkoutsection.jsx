import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "/src/context/CartContext";
import { CheckoutData } from "/src/data/Data";
import API from "/src/api/axios";
import Swal from "sweetalert2"; 

const CheckoutSection = () => {
  const navigate = useNavigate();
  const { cartItems, subtotal, setCartItems } = useCart();

  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [loading, setLoading]             = useState(false);

  const [form, setForm] = useState({
    firstName: "", lastName:  "", company:  "",
    country:   "", street:    "", city:     "",
    province:  "", zip:       "", phone:    "",
    email:     "", notes:     "",
  });

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const fields = [
      { value: form.firstName, message: "First name is mandatory."    },
      { value: form.lastName,  message: "Last name is mandatory."     },
      { value: form.country,   message: "Please select a country."     },
      { value: form.street,    message: "Street address is mandatory."},
      { value: form.city,      message: "City is mandatory."          },
      { value: form.zip,       message: "ZIP code is mandatory."      },
      { value: form.phone,     message: "Phone Number is mandatory."  },
      { value: form.email,     message: "Email is mandatory."         },
    ];

    for (const field of fields) {
      if (!field.value.trim()) {
        Swal.fire({
          icon:             "warning",
          title:            "Incomplete Form",
          text:             field.message,
          confirmButtonText: "OK",
          confirmButtonColor: "#B88E2F",
        });
        return false;
      }
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(form.email)) {
      Swal.fire({
        icon:              "warning",
        title:             "Invalid Email",
        text:              "Please enter a valid email address.",
        confirmButtonText: "OK",
        confirmButtonColor: "#B88E2F",
      });
      return false;
    }

    if (cartItems.length === 0) {
      Swal.fire({
        icon:              "warning",
        title:             "Your cart is empty.",
        text:              "Please add a product to the cart first.",
        confirmButtonText: "Shop Now",
        confirmButtonColor: "#B88E2F",
      });
      return false;
    }

    return true;
  };

  const handlePlaceOrder = async () => {
    if (!validate()) return;

    const confirm = await Swal.fire({
      icon:                "question",
      title:               "Would you like to confirm the order?",
      html: `
        <p style="color:#9F9F9F">Payment: <b style="color:#000">${paymentMethod.toUpperCase()}</b></p>
        <p style="color:#9F9F9F">Total: <b style="color:#B88E2F">Rs. ${subtotal?.toLocaleString("en-PK", { minimumFractionDigits: 2 })}</b></p>
      `,
      showCancelButton:     true,
      confirmButtonText:    "Yes, place the order.",
      cancelButtonText:     "Cancel",
      confirmButtonColor:   "#B88E2F",
      cancelButtonColor:    "#9F9F9F",
    });

    if (!confirm.isConfirmed) return;

    setLoading(true);

    const orderData = {
      items: cartItems.map(item => ({
        product:  item._id || item.id,
        quantity: item.quantity,
      })),
      shippingAddress: {
        street:  form.street,
        city:    form.city,
        state:   form.province,
        zip:     form.zip,
        country: form.country,
      },
      paymentMethod,
      notes: form.notes,
    };

    try {
      await API.post("/orders", orderData);

      await Swal.fire({
        icon:              "success",
        title:             "Confirm order",
        text:              "Your order has been placed successfully!",
        confirmButtonText: "OK",
        confirmButtonColor: "#B88E2F",
        timer:             3000,
        timerProgressBar:  true,
      });

      setCartItems([]);
      navigate("/order-success");

    } catch (err) {
      setLoading(false);

      Swal.fire({
        icon:              "error",
        title:             "Order Failed",
        text:              err.response?.data?.message || "Please try again",
        confirmButtonText: "OK",
        confirmButtonColor: "#B88E2F",
      });
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

      <div className="gap-16 py-24 px-20 ml-20">
        <h1 className="text-[36px] font-bold font-Poppins leading-[100%] text-[#000000]">
          Billing details
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex gap-42 mt-9 mb-2">
            <h3 className="text-black text-[16px] font-semibold">First Name</h3>
            <h3 className="text-black text-[16px] font-semibold">Last Name</h3>
          </div>
          <div className="flex gap-8">
            <input type="text" name="firstName" value={form.firstName}
              onChange={handleChange} placeholder="First Name"
              className="w-[210px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] 
              transition-all focus:outline-none focus:border-[#B88E2F]" />
            <input type="text" name="lastName" value={form.lastName}
              onChange={handleChange} placeholder="Last Name"
              className="w-[210px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] 
              transition-all focus:outline-none focus:border-[#B88E2F]" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-black text-[16px] font-semibold mt-7 mb-2">Company Name (Optional)</h3>
          <input type="text" name="company" value={form.company}
            onChange={handleChange}
            className="w-[453px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all focus:outline-none focus:border-[#B88E2F]" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-black text-[16px] font-semibold mt-7 mb-2">Country / Region</h3>
          <select name="country" value={form.country} onChange={handleChange}
            className="text-gray-400 w-[453px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all focus:outline-none focus:border-[#B88E2F]">
            <option value="">Select Country</option>
            {CheckoutData.sortOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-black text-[16px] font-semibold mt-7 mb-2">Street address</h3>
          <input type="text" name="street" value={form.street}
            onChange={handleChange}
            className="w-[453px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all focus:outline-none focus:border-[#B88E2F]" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-black text-[16px] font-semibold mt-7 mb-2">Town / City</h3>
          <input type="text" name="city" value={form.city}
            onChange={handleChange}
            className="w-[453px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all focus:outline-none focus:border-[#B88E2F]" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-black text-[16px] font-semibold mt-7 mb-2">Province</h3>
          <select name="province" value={form.province} onChange={handleChange}
            className="text-gray-400 w-[453px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all focus:outline-none focus:border-[#B88E2F]">
            <option value="">Select Province</option>
            {CheckoutData.sortOptionProvince.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-black text-[16px] font-semibold mt-7 mb-2">ZIP code</h3>
          <input type="text" name="zip" value={form.zip}
            onChange={handleChange}
            className="w-[453px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all focus:outline-none focus:border-[#B88E2F]" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-black text-[16px] font-semibold mt-7 mb-2">Phone</h3>
          <input type="tel" name="phone" value={form.phone}
            onChange={handleChange}
            className="w-[453px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all focus:outline-none focus:border-[#B88E2F]" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-black text-[16px] font-semibold mt-7 mb-2">Email address</h3>
          <input type="email" name="email" value={form.email}
            onChange={handleChange}
            className="w-[453px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] transition-all focus:outline-none focus:border-[#B88E2F]" />
        </div>

        <input type="text" name="notes" value={form.notes}
          onChange={handleChange} placeholder="Additional information"
          className="w-[453px] h-15 px-4 border border-[#9F9F9F] rounded-[10px] text-[20px] 
          transition-all focus:outline-none focus:border-[#B88E2F] mt-10" />
      </div>

      <div className="w-[608px] py-24 mr-8">

        <div className="flex justify-between mb-5">
          <h1 className="text-[24px] font-semibold font-Poppins">Product</h1>
          <h1 className="text-[24px] font-semibold font-Poppins">Subtotal</h1>
        </div>

        {cartItems.map((item, i) => {
          const price     = Number(item.price) || 0;
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
            Rs. {subtotal?.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
          </h1>
        </div>

        <div className="flex justify-between mt-5 pb-10 border-b border-[#D9D9D9] mb-5">
          <h1 className="text-[16px] font-normal text-black font-Poppins">Total</h1>
          <h1 className="text-[24px] font-bold text-[#B88E2F] font-Poppins">
            Rs. {subtotal?.toLocaleString("en-PK", { minimumFractionDigits: 2 })}
          </h1>
        </div>

        <div className="flex items-center">
          <input type="radio" name="payment" value="bank"
            checked={paymentMethod === "bank"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="accent-black" />
          <h1 className="text-[16px] font-medium text-black ml-4">Direct Bank Transfer</h1>
        </div>
        <p className="w-[528px] text-[16px] text-[#9F9F9F] font-light leading-relaxed mt-3">
          Make your payment directly into our bank account. Please use your Order ID as the
          payment reference. Your order will not be shipped until the funds have cleared.
        </p>

        <div className="flex items-center mt-6">
          <input type="radio" name="payment" value="bank_transfer"
            checked={paymentMethod === "bank_transfer"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="accent-black" />
          <h1 className="text-[16px] font-medium text-[#9F9F9F] ml-4">Bank Transfer</h1>
        </div>

        <div className="flex items-center mt-3">
          <input type="radio" name="payment" value="cod"
            checked={paymentMethod === "cod"}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="accent-black" />
          <h1 className="text-[16px] font-medium text-[#9F9F9F] ml-4">Cash On Delivery</h1>
        </div>

        <p className="w-[529px] text-[16px] font-normal leading-relaxed text-black mt-5">
          Your personal data will be used to support your experience throughout this website,
          to manage access to your account, and for other purposes described in our{" "}
          <span className="font-semibold cursor-pointer">privacy policy.</span>
        </p>

        <div className="flex justify-center items-center mt-12 mr-8">
          <button
            onClick={handlePlaceOrder}
            disabled={loading}
            className="w-[318px] h-16 px-12 border border-black rounded-[15px]
              text-[20px] hover:bg-black hover:text-white transition-all
              disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? "Placing Order..." : "Place order"}
          </button>
        </div>

      </div>
    </div>
  );
};

export default CheckoutSection;