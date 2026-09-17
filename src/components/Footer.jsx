import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="footer-logo" to="/">
            🌿 PestiCare
          </Link>
          <p>
            Helping farmers make informed crop protection decisions with trusted
            products, practical guidance, and safe delivery.
          </p>
          <p className="footer-note">
            Use pesticides responsibly and always follow the product label.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <Link to="/pesticides">Pesticide directory</Link>
          <Link to="/wishlist">My wishlist</Link>
          <Link to="/cart">Shopping cart</Link>
          <Link to="/safety">Safety guidelines</Link>
        </div>

        <div>
          <h3>Customer support</h3>
          <a href="mailto:support@pesticare.com">support@pesticare.com</a>
          <a href="tel:+918001234567">+91 800 123 4567</a>
          <span>Mon-Sat, 9:00 AM - 6:00 PM</span>
          <span>Order tracking available online</span>
        </div>

        <div>
          <h3>Our commitment</h3>
          <span>✓ Verified product information</span>
          <span>✓ Secure demo checkout</span>
          <span>✓ Responsible-use guidance</span>
          <span>✓ Delivery updates</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 PestiCare · Pesticide Management System</span>
        <span>
          For agricultural use only · Keep away from children and animals.
        </span>
      </div>
    </footer>
  );
}
