import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import * as cartAPI from "../api/cartAPI";
import Swal from "sweetalert2";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState([]);  
  const [subtotal, setSubtotal]   = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loading, setLoading]     = useState(false);

useEffect(() => {
  if (user) {            
    fetchCart();
  } else {
    setCartItems([]);
    setSubtotal(0);
  }
}, [user]);

  const fetchCart = async () => {
    try {
      const res = await cartAPI.getCart();
      const items = res.data?.data?.items || [];

      const flatItems = items.map((item) => ({
        _id:      item.product._id,
        name:     item.product.name,
        price:    item.product.price,
        images:   item.product.images,
        stock:    item.product.stock,
        quantity: item.quantity,
      }));

      setCartItems(flatItems);
      setSubtotal(res.data?.data?.subtotal || 0);
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async (product, quantity = 1) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Please log in to continue",
        text:  "Please log in first to add to cart.",
        confirmButtonColor: "#B88E2F",
      });
      return;
    }

    setLoading(true);
    try {
      await cartAPI.addToCart(product._id, quantity);
      await fetchCart();    

      Swal.fire({
        icon: "success",
        title: "Item added to cart",
        timer: 1200,
        showConfirmButton: false,
      });

      setIsCartOpen(true);  
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Item could not be added",
        text:  err.response?.data?.message || "Please try again",
        confirmButtonColor: "#B88E2F",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      await cartAPI.updateCartItem(productId, quantity);
      await fetchCart();
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Failed to update",
        text:  err.response?.data?.message,
        confirmButtonColor: "#B88E2F",
      });
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await cartAPI.removeFromCart(productId);
      await fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const clearCartItems = async () => {
    try {
      await cartAPI.clearCart();
      setCartItems([]);
      setSubtotal(0);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider value={{
      cartItems, setCartItems, subtotal, isCartOpen, setIsCartOpen, loading,
      addToCart, updateQuantity, removeFromCart, clearCartItems, fetchCart,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);