import { Link, useLocation } from "react-router-dom";
import { useProducts } from "../context/ProductContext";

function Navbar() {
  const { cartCount } = useProducts();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <h2>🛍 Product<span>Hub</span></h2>
        </Link>
      </div>

      <div className="nav-menu">
        <Link
          to="/"
          className={isActive("/") ? "active-link" : ""}
        >
          Home
        </Link>

        <Link
          to="/add-product"
          className={isActive("/add-product") ? "active-link" : ""}
        >
          Add Product
        </Link>

        <Link
          to="/cart"
          className={isActive("/cart") ? "active-link cart-link" : "cart-link"}
        >
          🛒 Cart

          {cartCount > 0 && (
            <span className="cart-count">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;