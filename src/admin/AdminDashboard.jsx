import { Link } from "react-router-dom";
import { usePesticides } from "../context/PesticideContext";
import { getData } from "../utils/storage";

export default function Admin() {
  const { pesticides, categories } = usePesticides();
  const users = getData("users");
  const orders = getData("orders");

  return (
    <section>
      <h1>Admin Dashboard</h1>
      <p className="muted">
        Manage the PestiCare catalog, customers, and deliveries.
      </p>
      <div className="stats">
        <div>
          <b>{pesticides.length}</b>
          <span>Total Pesticides</span>
        </div>
        <div>
          <b>{categories.length}</b>
          <span>Total Categories</span>
        </div>
        <div>
          <b>{users.length}</b>
          <span>Total Users</span>
        </div>
        <div>
          <b>{orders.length}</b>
          <span>Total Orders</span>
        </div>
      </div>
      <div className="admin-links">
        <Link to="/admin/pesticides">Manage Pesticides</Link>
        <Link to="/admin/categories">Manage Categories</Link>
        <Link to="/admin/users">Manage Users</Link>
        <Link to="/admin/orders">Manage Orders</Link>
      </div>
    </section>
  );
}
