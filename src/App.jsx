import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOtp from "./pages/VarifyOtp";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import Wishlist from "./pages/Wishlist";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { CartProvider } from "/src/context/CartContext";
import CartDrawer from "./components/features/CartDrawer";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import { ToastContainer } from "react-toastify";

function AuthRoute({ children }) {
  const { user, token, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (!token && !user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
}

function RootRedirect() {
  const { user, token, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  return token || user ? (
    <Navigate to="/home" replace />
  ) : (
    <Navigate to="/login" replace />
  );
}

function AppRoutes() {
  return (
    <>
      <CartDrawer />
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/home"
          element={
            <AuthRoute>
              <Home />
            </AuthRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <AuthRoute>
              <Shop />
            </AuthRoute>
          }
        />
        <Route
          path="/about"
          element={
            <AuthRoute>
              <About />
            </AuthRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <AuthRoute>
              <Contact />
            </AuthRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <AuthRoute>
              <SingleProduct />
            </AuthRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <AuthRoute>
              <Cart />
            </AuthRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <AuthRoute>
              <Wishlist />
            </AuthRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <AuthRoute>
              <Checkout />
            </AuthRoute>
          }
        />
        <Route
          path="/order-success"
          element={
            <AuthRoute>
              <OrderSuccess />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        closeOnClick
        pauseOnHover
        theme="dark"
      />

      <AuthProvider>
        <CartProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

export default App;
