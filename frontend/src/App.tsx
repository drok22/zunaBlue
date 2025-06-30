import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Sidebar from "./components/Sidebar";
import StorePage from "./pages/StorePage";
import StatusPage from "./pages/StatusPage";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Router>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
        <div
          style={{
            marginLeft: collapsed ? 100 : 200,
            padding: 10,
            flex: 1,
            minWidth: 0,
            transition: "margin 0.3s ease",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/status" element={<StatusPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
