import { Link } from "react-router-dom";
import { usePesticides } from "../context/PesticideContext";
import PesticideCard from "../components/PesticideCard";
import { siteImages } from "../data/sampleData";
export default function Home() {
  const { pesticides, categories } = usePesticides();
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">SMART AGRICULTURE • SAFER CROPS</span>
          <h1>
            Protect crops with <em>knowledge.</em>
          </h1>
          <p>
            Explore pesticide information, usage guidance and safety precautions
            in one professional platform.
          </p>
          <Link className="btn" to="/pesticides">
            Explore Pesticides
          </Link>
        </div>
      </section>
      <section className="visual-section">
        <div className="section-heading">
          <span className="eyebrow green">FIELD-TESTED SOLUTIONS</span>
          <h2>Protection designed around every crop</h2>
          <p>
            Discover practical crop protection guidance built for healthier
            fields and confident decisions.
          </p>
        </div>
        <div className="visual-grid">
          <article className="visual-card">
            <img
              src={siteImages.cropSolutions}
              alt="Healthy crop rows in an open field"
            />
            <div>
              <span className="card-kicker">Crop solutions</span>
              <h3>Stronger crops, season after season</h3>
              <p>
                Targeted products for field crops, vegetables, orchards and
                vines.
              </p>
            </div>
          </article>
          <article className="visual-card">
            <img
              src={siteImages.cropCloseup}
              alt="Close-up of healthy green leaves"
            />
            <div>
              <span className="card-kicker">Plant health</span>
              <h3>Guidance that starts with observation</h3>
              <p>
                Match treatments to the crop, growth stage and pest pressure.
              </p>
            </div>
          </article>
          <article className="visual-card">
            <img
              src={siteImages.pestProblems}
              alt="Close-up of a leaf showing pest damage"
            />
            <div>
              <span className="card-kicker">Pest problems</span>
              <h3>Identify before you act</h3>
              <p>Recognize common threats and apply products responsibly.</p>
            </div>
          </article>
        </div>
      </section>
      <section>
        <h2>Featured Pesticides</h2>
        <div className="grid">
          {pesticides.slice(0, 3).map((p) => (
            <PesticideCard key={p.id} p={p} />
          ))}
        </div>
      </section>
      <section className="story-grid">
        <article className="story-card">
          <img
            src={siteImages.innovation}
            alt="Agricultural technology research in a modern laboratory"
          />
          <div>
            <span className="card-kicker">Technology & innovation</span>
            <h2>Better decisions through better information</h2>
            <p>
              Bring field knowledge, product data and responsible application
              together.
            </p>
          </div>
        </article>
        <article className="story-card">
          <img
            src={siteImages.quality}
            alt="Quality testing equipment in an agricultural laboratory"
          />
          <div>
            <span className="card-kicker">Quality promise</span>
            <h2>Clarity you can trust</h2>
            <p>
              Every listing is organized around transparent use and safety
              guidance.
            </p>
          </div>
        </article>
      </section>
      <section className="commitment-grid">
        <div>
          <span className="eyebrow green">OUR COMMITMENT</span>
          <h2>Responsible farming is a shared responsibility</h2>
          <p>
            PestiCare supports measured crop protection that respects farmers,
            communities, beneficial insects and natural resources.
          </p>
          <Link className="btn" to="/safety">
            Read safety guidance
          </Link>
        </div>
        <img
          src={siteImages.sustainability}
          alt="Green agricultural landscape supporting biodiversity"
        />
      </section>
      <section className="contact-panel">
        <img
          src={siteImages.contact}
          alt="Farmer working in a professional agricultural environment"
        />
        <div>
          <span className="card-kicker">Talk to PestiCare</span>
          <h2>Make your next crop decision with confidence</h2>
          <p>
            Browse the catalog or contact our support team for product
            information.
          </p>
          <Link className="btn" to="/pesticides">
            Browse products
          </Link>
        </div>
      </section>
      <section>
        <h2>Browse by Category</h2>
        <div className="category-grid">
          {categories.map((c) => (
            <Link key={c} to={"/pesticides?category=" + encodeURIComponent(c)}>
              {c}
            </Link>
          ))}
        </div>
      </section>
      <section className="safety-banner">
        <h2>Safety First</h2>
        <p>
          Always read product instructions, use recommended protective equipment
          and follow local regulations.
        </p>
        <Link className="btn light" to="/safety">
          Safety Guidelines
        </Link>
      </section>
    </>
  );
}
