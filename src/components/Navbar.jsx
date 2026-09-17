import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const nav = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${menuOpen ? "navbar-open" : ""}`}>
      <Link className="brand" to="/" onClick={closeMenu}>
        🌿 PestiCare
      </Link>

      <button
        type="button"
        className="menu-toggle"
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/pesticides" onClick={closeMenu}>Pesticides</Link>
        <Link to="/safety" onClick={closeMenu}>Safety</Link>
        <Link className="cart-link" to="/cart" onClick={closeMenu}>
          Cart <span>{itemCount}</span>
        </Link>
        <Link className="cart-link" to="/wishlist" onClick={closeMenu}>
          Wishlist <span>{wishlistCount}</span>
        </Link>
        {user && <Link to="/profile" onClick={closeMenu}>Profile</Link>}
        {user?.role === "admin" && <Link to="/admin" onClick={closeMenu}>Admin</Link>}
        {user ? (
          <button
            type="button"
            onClick={() => {
              logout();
              closeMenu();
              nav("/");
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" onClick={closeMenu}>Login</Link>
            <Link className="btn small" to="/register" onClick={closeMenu}>
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
