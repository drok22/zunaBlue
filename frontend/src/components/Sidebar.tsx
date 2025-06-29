import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">🛍 My Store</h2>
      <ul className="sidebar-nav">
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>
          <Link to="/store">🛍 Store</Link>
        </li>
        <li>
          <Link to="/cart">🛒 Cart</Link>
        </li>
        <li>
          <Link to="/checkout">💳 Checkout</Link>
        </li>
        <li>
          <Link to="/status">🔧 Status</Link>
        </li>
      </ul>
    </nav>
  );
}
