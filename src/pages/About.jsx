export default function About() {
  return (
    <div className="stack">
      <div className="sectionHeader">
        <h1 className="h1">About FlowerPlant</h1>
        <p className="muted">Our vision, mission, and purpose.</p>
      </div>

      <section className="card">
        <h2 className="h2">Vision</h2>
        <p>
          Make plant care feel simple and rewarding—so more people grow healthy plants and greener
          homes.
        </p>
      </section>

      <section className="card">
        <h2 className="h2">Mission</h2>
        <p>
          Provide clear plant care guides, practical tips, and a personal space to manage your own
          plant collection.
        </p>
      </section>

      <section className="card">
        <h2 className="h2">Purpose</h2>
        <p>
          Support beginners and enthusiasts with trustworthy, easy-to-use plant care information and
          tools.
        </p>
      </section>
    </div>
  );
}