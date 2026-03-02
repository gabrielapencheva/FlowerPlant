import PlantCard from "../components/PlantCard";
import { predefinedGuides } from "../data/predefinedGuides";
import plantImage from "../assets/plant.jpg";

export default function Home() {
  return (
    <div className="stack">
      <section className="hero">
        <div className="heroText">
          <h1 className="h1">Welcome to FlowerPlant</h1>
          <p className="lead">
            A friendly community for plant enthusiasts, gardeners, and beginners learning plant care.
          </p>
          <div className="heroTips">
            <div className="tip">
              <strong>Light:</strong> Match your plant to your window (low / bright indirect / direct).
            </div>
            <div className="tip">
              <strong>Water:</strong> Overwatering is the #1 beginner mistake—check soil first.
            </div>
            <div className="tip">
              <strong>Soil:</strong> Most indoor plants love well-draining mixes.
            </div>
          </div>
        </div>

       <div className="heroArt">
  <img src={plantImage} alt="Beautiful indoor plants" className="heroImage" />
</div>
      </section>

      <section className="stack">
        <div className="sectionHeader">
          <h2 className="h2">Predefined plant care guides</h2>
          <p className="muted">Explore these examples, then add your own in “My Plants”.</p>
        </div>

        <div className="cardsGrid">
          {predefinedGuides.map((p) => (
            <PlantCard key={p.id} plant={p} />
          ))}
        </div>
      </section>

      <section className="card">
        <h2 className="h2">Plant care basics (quick guide)</h2>
        <ul className="list">
          <li>
            <strong>Light:</strong> “Bright indirect” means near a bright window but not harsh sun.
          </li>
          <li>
            <strong>Watering:</strong> Water thoroughly, then wait until soil is partly dry again.
          </li>
          <li>
            <strong>Soil:</strong> Add perlite/bark for drainage; avoid heavy compact soil.
          </li>
          <li>
            <strong>Difficulty:</strong> Beginner plants forgive mistakes; expert plants need stable care.
          </li>
        </ul>
      </section>
    </div>
  );
}