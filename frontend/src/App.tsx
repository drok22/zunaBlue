import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Sidebar from "./components/Sidebar";
import StorePage from "./pages/StorePage";
import StatusPage from "./pages/StatusPage";

export default function App() {
  return (
    <Router>
        <Sidebar />
        <div style={{ marginLeft: 200, padding: 10, flex:1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/status" element={<StatusPage />} />
          </Routes>
        </div>
    </Router>
  );
}
