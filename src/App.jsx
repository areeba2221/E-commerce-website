import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartProvider } from "/src/context/CartContext";
import CartDrawer from "./components/features/CartDrawer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;