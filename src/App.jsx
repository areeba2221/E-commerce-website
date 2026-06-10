import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartProvider } from "/src/context/CartContext";
import CartDrawer from "./components/features/CartDrawer";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;