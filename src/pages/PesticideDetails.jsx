import { Link, useParams } from "react-router-dom";
import { usePesticides } from "../context/PesticideContext";

const fallbackImage =
  "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80";

export default function Details() {
  const { id } = useParams();
  const { pesticides } = usePesticides();
  const pesticide = pesticides.find((item) => item.id === id);

  if (!pesticide) {
    return (
      <section className="empty">
        Product not found. <Link to="/pesticides">Go back</Link>
      </section>
    );
  }

  const rows = [
    ["Active Ingredient", pesticide.activeIngredient],
    ["Recommended Crops", pesticide.recommendedCrops],
    ["Target Pest", pesticide.targetPest],
    ["Dosage", pesticide.dosage],
    ["Manufacturing Date", pesticide.manufacturingDate],
    ["Expiry Date", pesticide.expiryDate],
  ];

  return (
    <section>
      <div className="details">
        <img
          src={pesticide.image || fallbackImage}
          alt={pesticide.name}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = fallbackImage;
          }}
        />
        <div>
          <span className="badge">{pesticide.category}</span>
          <h1>{pesticide.name}</h1>
          <h3>{pesticide.brand}</h3>
          <p>{pesticide.description}</p>
          {rows.map(([label, value]) => (
            <p key={label}>
              <strong>{label}:</strong> {value}
            </p>
          ))}
        </div>
      </div>

      <div className="info-grid">
        <article>
          <h2>Usage Instructions</h2>
          <p>{pesticide.usageInstructions}</p>
        </article>
        <article className="warning">
          <h2>⚠ Safety Precautions</h2>
          <p>{pesticide.safetyPrecautions}</p>
          <strong>Warning level: {pesticide.warningLevel}</strong>
        </article>
      </div>
    </section>
  );
}
