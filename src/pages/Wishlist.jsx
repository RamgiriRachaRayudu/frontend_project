import { Link } from "react-router-dom";
import PesticideCard from "../components/PesticideCard";
import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { items } = useWishlist();

  return (
    <section>
      <div className="row">
        <div>
          <h1>My Wishlist</h1>
          <p className="muted">
            {items.length} saved product{items.length === 1 ? "" : "s"}
          </p>
        </div>
        <Link className="btn light" to="/pesticides">
          Continue shopping
        </Link>
      </div>
      {items.length ? (
        <div className="grid">
          {items.map((item) => (
            <PesticideCard key={item.id} p={item} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Your wishlist is empty</h2>
          <p>Save products here to compare or purchase them later.</p>
          <Link className="btn" to="/pesticides">
            Explore pesticides
          </Link>
        </div>
      )}
    </section>
  );
}
