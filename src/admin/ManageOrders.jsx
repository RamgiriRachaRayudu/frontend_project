import { useState } from "react";
import { getData, setData } from "../utils/storage";

const statuses = [
  "Confirmed",
  "Packed",
  "Shipped",
  "Out for delivery",
  "Delivered",
];

export default function ManageOrders() {
  const [orders, setOrders] = useState(getData("orders", []));

  const updateStatus = (id, status) => {
    const next = orders.map((order) =>
      order.id === id ? { ...order, status } : order,
    );
    setOrders(next);
    setData("orders", next);
  };

  return (
    <section>
      <h1>Manage Orders</h1>
      {!orders.length ? (
        <div className="empty">No customer orders have been placed yet.</div>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Delivery status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>
                    <strong>{order.id}</strong>
                    <br />
                    <span className="muted">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </span>
                  </td>
                  <td>{order.address}</td>
                  <td>
                    {order.items.reduce(
                      (total, item) => total + item.quantity,
                      0,
                    )}
                  </td>
                  <td>₹{order.total}</td>
                  <td>{order.payment.toUpperCase()}</td>
                  <td>
                    <select
                      value={order.status}
                      onChange={(event) =>
                        updateStatus(order.id, event.target.value)
                      }
                    >
                      {statuses.map((status) => (
                        <option key={status}>{status}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
