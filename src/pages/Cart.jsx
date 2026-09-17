import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  if (!items.length) {
    return (
      <section className="empty">
        <h1>Your cart is empty</h1>
        <p>Add safe, verified crop protection products to get started.</p>
        <Link className="btn" to="/pesticides">
          Browse pesticides
        </Link>
      </section>
    );
  }

  return (
    <section>
      <h1>Shopping Cart</h1>
      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => (
            <article className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p className="muted">
                  {item.brand} · ₹{item.price || 499}
                </p>
                <div className="row">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <strong>{item.quantity}</strong>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                  <button
                    className="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <strong>₹{(item.price || 499) * item.quantity}</strong>
            </article>
          ))}
        </div>
        <aside className="info-card order-summary">
          <h2>Order Summary</h2>
          <p>
            Subtotal <strong>₹{subtotal}</strong>
          </p>
          <p>
            Delivery <strong>FREE</strong>
          </p>
          <hr />
          <h3>
            Total <strong>₹{subtotal}</strong>
          </h3>
          <button className="btn" onClick={() => navigate("/checkout")}>
            Proceed to payment
          </button>
        </aside>
      </div>
    </section>
  );
}
