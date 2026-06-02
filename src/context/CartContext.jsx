import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product, quantity, selectedSize, selectedColor) => {
    setCartItems(prev => {
      const existing = prev.find(
        item => item.id === product.id && item.size === selectedSize && item.color === selectedColor
      );
      if (existing) {
        return prev.map(item =>
          item.id === product.id && item.size === selectedSize && item.color === selectedColor
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity, size: selectedSize, color: selectedColor }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id, size, color) => {
    setCartItems(prev =>
      prev.filter(item => !(item.id === id && item.size === size && item.color === color))
    );
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const price = parseFloat(String(item.price).replace(/[^0-9.]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, isCartOpen, setIsCartOpen, addToCart, removeFromCart, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);