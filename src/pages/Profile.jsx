import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { getData } from "../utils/storage";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const { itemCount: cartCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const [form, setForm] = useState({
    name: user.name || "",
    email: user.email || "",
    phone: user.phone || "",
    address: user.address || "",
    city: user.city || "",
    postalCode: user.postalCode || "",
    farmName: user.farmName || "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const orders = useMemo(
    () => getData("orders", []).filter((order) => order.userId === user.id),
    [user.id, message],
  );

  const save = (event) => {
    event.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    updateProfile(form);
    setMessage("Profile updated successfully.");
  };

  return (
    <section className="profile-page">
      <div className="profile-header">
        <div>
          <span className="badge">
            {user.role === "admin" ? "Administrator" : "Customer"}
          </span>
          <h1>My Profile</h1>
          <p className="muted">
            Manage your account, delivery information, and orders.
          </p>
        </div>
        <div className="profile-avatar">
          {(user.name || "U").charAt(0).toUpperCase()}
        </div>
      </div>

      <div className="profile-layout">
        <form className="info-card profile-form" onSubmit={save}>
          <h2>Personal details</h2>
          {message && <div className="alert">{message}</div>}
          {error && <div className="alert error">{error}</div>}
          <label>
            Full name
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </label>
          <label>
            Email address
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </label>
          <label>
            Phone number
            <input
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="+91 98765 43210"
            />
          </label>
          <label>
            Farm or business name
            <input
              value={form.farmName}
              onChange={(e) => setForm({ ...form, farmName: e.target.value })}
              placeholder="Optional"
            />
          </label>
          <h2>Default delivery address</h2>
          <label>
            Address
            <input
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              placeholder="House number and street"
            />
          </label>
          <div className="profile-fields-row">
            <label>
              City
              <input
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </label>
            <label>
              Postal code
              <input
                value={form.postalCode}
                onChange={(e) =>
                  setForm({ ...form, postalCode: e.target.value })
                }
              />
            </label>
          </div>
          <button className="btn" type="submit">
            Save profile
          </button>
        </form>

        <div className="profile-sidebar">
          <div className="profile-stats">
            <Link to="/wishlist">
              <b>{wishlistCount}</b>
              <span>Wishlist items</span>
            </Link>
            <Link to="/cart">
              <b>{cartCount}</b>
              <span>Cart items</span>
            </Link>
            <div>
              <b>{orders.length}</b>
              <span>Orders placed</span>
            </div>
          </div>
          <div className="info-card">
            <h2>Order history</h2>
            {orders.length ? (
              orders.map((order) => (
                <div className="profile-order" key={order.id}>
                  <div>
                    <strong>{order.id}</strong>
                    <span>
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span>{order.status}</span>
                    <strong>₹{order.total}</strong>
                  </div>
                  <Link to={`/tracking/${order.id}`}>Track delivery →</Link>
                </div>
              ))
            ) : (
              <p className="muted">
                Your orders will appear here after checkout.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
