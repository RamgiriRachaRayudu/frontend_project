import { siteImages } from "../data/sampleData";

const cards = [
  [
    "🧤",
    "Protective Equipment",
    "Wear gloves, mask, eye protection and suitable clothing.",
  ],
  [
    "📦",
    "Safe Storage",
    "Keep products sealed, labeled and away from food and children.",
  ],
  [
    "♻️",
    "Responsible Disposal",
    "Never reuse empty containers. Follow local disposal guidance.",
  ],
  [
    "🩹",
    "First Aid Awareness",
    "In case of exposure, follow the product label and seek medical help when needed.",
  ],
  [
    "🌍",
    "Environmental Care",
    "Avoid contamination of water bodies and minimize spray drift.",
  ],
];
export default function Safety() {
  return (
    <section>
      <div className="safety-hero">
        <img
          src={siteImages.safety}
          alt="Responsible agricultural work in a green field"
        />
        <div>
          <span className="eyebrow">RESPONSIBLE USE</span>
          <h1>Pesticide Safety & Awareness</h1>
          <p>
            Protect people, crops and the environment with every application.
          </p>
        </div>
      </div>
      <p className="lead">
        Responsible use protects farmers, consumers, animals and the
        environment.
      </p>
      <div className="grid">
        {cards.map((c) => (
          <article className="info-card" key={c[1]}>
            <div className="icon">{c[0]}</div>
            <h2>{c[1]}</h2>
            <p>{c[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
