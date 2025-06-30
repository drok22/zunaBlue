import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <button
        className="toggle-btn"
        onClick={() => setCollapsed((prev) => !prev)}
      >
        🟰
      </button>

      {!collapsed && (
        <div>
          <div className="sidebar-title"> 🐕 Zuna Blue 🐶 </div>
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
        </div>
      )}
    </div>
  );
}
