import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const fallbackImage =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80";

export default function PesticideCard({ p }) {
  const { addToCart } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  return (
    <article className="card">
      <img
        src={p.image || fallbackImage}
        alt={p.name}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = fallbackImage;
        }}
      />
      <div className="card-body">
        <div className="card-heading">
          <span className={`badge ${p.warningLevel.toLowerCase()}`}>
            {p.category}
          </span>
          <button
            className={
              isWishlisted(p.id) ? "wishlist-button active" : "wishlist-button"
            }
            onClick={() => toggleWishlist(p)}
            aria-label={
              isWishlisted(p.id)
                ? `Remove ${p.name} from wishlist`
                : `Add ${p.name} to wishlist`
            }
            title={
              isWishlisted(p.id) ? "Remove from wishlist" : "Add to wishlist"
            }
          >
            {isWishlisted(p.id) ? "♥" : "♡"}
          </button>
        </div>
        <h3>{p.name}</h3>
        <p className="muted">
          {p.brand} · ₹{p.price || 499}
        </p>
        <p>{p.description}</p>
        <div className="row">
          <Link className="btn" to={`/pesticides/${p.id}`}>
            View Details
          </Link>
          <button onClick={() => addToCart(p)}>Add to cart</button>
        </div>
      </div>
    </article>
  );
}
