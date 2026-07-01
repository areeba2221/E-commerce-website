import { createContext, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "./AuthContext";
import * as cartAPI from "../api/cartAPI";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import {
  setCartItems as setCartItemsAction,
  setCartSubtotal as setCartSubtotalAction,
  setCartOpen as setCartOpenAction,
  setCartLoading as setCartLoadingAction,
  clearCart as clearCartAction,
} from "../features/cart/cartSlice";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const {
    items: cartItems,
    subtotal,
    isCartOpen,
    loading,
  } = useSelector((state) => state.cart);

  useEffect(() => {
    if (user) {
      fetchCart();
    } else {
      dispatch(clearCartAction());
    }
  }, [dispatch, user]);

  const fetchCart = async () => {
    try {
      const res = await cartAPI.getCart();
      const items = res.data?.data?.items || [];

      const flatItems = items.map((item) => ({
        _id: item.product._id,
        name: item.product.name,
        price: item.product.price,
        images: item.product.images,
        stock: item.product.stock,
        quantity: item.quantity,
      }));

      dispatch(setCartItemsAction(flatItems));
      dispatch(setCartSubtotalAction(res.data?.data?.subtotal || 0));
    } catch (err) {
      console.log(err);
    }
  };

  const addToCart = async (product, quantity = 1) => {
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Please log in to continue",
        text: "Please log in first to add to cart.",
        confirmButtonColor: "#B88E2F",
      });
      return;
    }

    dispatch(setCartLoadingAction(true));
    try {
      await cartAPI.addToCart(product._id, quantity);
      await fetchCart();

      toast.success("Item added to cart!");

      dispatch(setCartOpenAction(true));
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Failed to add item to cart. Please try again.",
      );
    } finally {
      dispatch(setCartLoadingAction(false));
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      await cartAPI.updateCartItem(productId, quantity);
      await fetchCart();
    } catch (err) {
      toast.error(
        err.response?.data?.message ||
          "Failed to update item quantity. Please try again.",
      );
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
      dispatch(clearCartAction());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems: (items) => dispatch(setCartItemsAction(items)),
        subtotal,
        isCartOpen,
        setIsCartOpen: (value) => dispatch(setCartOpenAction(value)),
        loading,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCartItems,
        fetchCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
