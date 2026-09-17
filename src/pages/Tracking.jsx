import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getData } from "../utils/storage";

const stages = [
  "Confirmed",
  "Packed",
  "Shipped",
  "Out for delivery",
  "Delivered",
];

export default function Tracking() {
  const { orderId } = useParams();
  const { user } = useAuth();
  const [order, setOrder] = useState(() =>
    getData("orders", []).find((item) => item.id === orderId),
  );

  useEffect(() => {
    if (!order) return undefined;
    const timer = setInterval(() => {
      setOrder((current) => {
        if (!current) return current;
        const index = stages.indexOf(current.status);
        return {
          ...current,
          status: stages[Math.min(index + 1, stages.length - 1)],
        };
      });
    }, 10000);
    return () => clearInterval(timer);
  }, [order]);

  if (!order || order.userId !== user.id) {
    return (
      <section className="empty">
        <h1>Order not found</h1>
        <Link to="/pesticides">Continue shopping</Link>
      </section>
    );
  }

  const currentIndex = stages.indexOf(order.status);
  return (
    <section>
      <div className="row">
        <div>
          <h1>Track order {order.id}</h1>
          <p className="muted">{order.eta}</p>
        </div>
        <Link className="btn light" to="/pesticides">
          Shop more
        </Link>
      </div>
      <div className="info-card tracking-card">
        <p>
          <strong>Delivering to:</strong> {order.address}
        </p>
        <div className="tracking-route" aria-label="Delivery vehicle route">
          <span className="route-point">Warehouse</span>
          <div className="route-line">
            <span className="route-vehicle" aria-label="Delivery vehicle">
              🚚
            </span>
          </div>
          <span className="route-point">Your location</span>
        </div>
        <div className="tracking-steps">
          {stages.map((stage, index) => (
            <div
              className={
                index <= currentIndex ? "tracking-step active" : "tracking-step"
              }
              key={stage}
            >
              <span>{index <= currentIndex ? "✓" : index + 1}</span>
              <strong>{stage}</strong>
            </div>
          ))}
        </div>
        <p className="alert">
          Live demo tracking updates automatically every 10 seconds while this
          page is open.
        </p>
      </div>
    </section>
  );
}
