import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { getData, setData } from "../utils/storage";

export default function Checkout() {
  const { user } = useAuth();
  const { items, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    address: "",
    city: "",
    postalCode: "",
    payment: "card",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });
  const [error, setError] = useState("");

  if (!items.length) {
    return (
      <section className="empty">
        <h1>No items to checkout</h1>
        <Link className="btn" to="/pesticides">
          Browse pesticides
        </Link>
      </section>
    );
  }

  const submit = (event) => {
    event.preventDefault();
    if (!form.address || !form.city || !form.postalCode) {
      setError("Please enter a complete delivery address.");
      return;
    }
    if (
      form.payment === "card" &&
      (!/^\d{16}$/.test(form.cardNumber.replace(/\s/g, "")) ||
        !form.cardName ||
        !/^\d{2}\/\d{2}$/.test(form.expiry) ||
        !/^\d{3,4}$/.test(form.cvv))
    ) {
      setError(
        "Enter a valid 16-digit card number, name, expiry (MM/YY), and CVV.",
      );
      return;
    }
    const order = {
      id: `PC-${Date.now().toString().slice(-8)}`,
      userId: user.id,
      items,
      total: subtotal,
      address: `${form.address}, ${form.city} - ${form.postalCode}`,
      payment: form.payment,
      status: "Confirmed",
      createdAt: new Date().toISOString(),
      eta: "Expected delivery in 2-4 days",
    };
    setData("orders", [order, ...getData("orders", [])]);
    clearCart();
    navigate(`/tracking/${order.id}`);
  };

  return (
    <section>
      <h1>Secure Checkout</h1>
      <p className="alert">
        Demo payment mode: no real money is charged in this local app.
      </p>
      <form className="checkout-grid" onSubmit={submit}>
        <div className="info-card">
          <h2>Delivery details</h2>
          {error && <p className="alert error">{error}</p>}
          <label>
            Address
            <input
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="House number and street"
            />
          </label>
          <label>
            City
            <input
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              placeholder="City"
            />
          </label>
          <label>
            Postal code
            <input
              value={form.postalCode}
              onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
              placeholder="Postal code"
            />
          </label>
        </div>
        <div className="info-card">
          <h2>Payment method</h2>
          {["card", "upi", "cod"].map((method) => (
            <label className="payment-option" key={method}>
              <input
                type="radio"
                checked={form.payment === method}
                onChange={() => setForm({ ...form, payment: method })}
              />
              {method === "cod" ? "Cash on delivery" : method.toUpperCase()}
            </label>
          ))}
          {form.payment === "card" && (
            <div className="card-details">
              <h3>Card details</h3>
              <label>
                Card number
                <input
                  inputMode="numeric"
                  maxLength="19"
                  value={form.cardNumber}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      cardNumber: e.target.value.replace(/[^\d ]/g, ""),
                    })
                  }
                  placeholder="1234 5678 9012 3456"
                />
              </label>
              <label>
                Name on card
                <input
                  value={form.cardName}
                  onChange={(e) =>
                    setForm({ ...form, cardName: e.target.value })
                  }
                  placeholder="Cardholder name"
                />
              </label>
              <div className="card-fields-row">
                <label>
                  Expiry
                  <input
                    maxLength="5"
                    value={form.expiry}
                    onChange={(e) =>
                      setForm({ ...form, expiry: e.target.value })
                    }
                    placeholder="MM/YY"
                  />
                </label>
                <label>
                  CVV
                  <input
                    inputMode="numeric"
                    maxLength="4"
                    value={form.cvv}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        cvv: e.target.value.replace(/\D/g, ""),
                      })
                    }
                    placeholder="123"
                  />
                </label>
              </div>
            </div>
          )}
          <h3>Total: ₹{subtotal}</h3>
          <button className="btn" type="submit">
            Pay ₹{subtotal} and place order
          </button>
        </div>
      </form>
    </section>
  );
}
