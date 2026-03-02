export default function PlantCard({ plant, actions }) {
  return (
    <article className="card">
      <div className="cardTop">
        <div>
          <h3 className="cardTitle">{plant.commonName}</h3>
          <div className="cardSub">{plant.scientificName}</div>
        </div>

        <div className="pill">{plant.level}</div>
      </div>

      <dl className="grid2">
        <div>
          <dt>Light</dt>
          <dd>{plant.light}</dd>
        </div>
        <div>
          <dt>Watering</dt>
          <dd>{plant.watering}</dd>
        </div>
        <div className="span2">
          <dt>Soil</dt>
          <dd>{plant.soil}</dd>
        </div>
      </dl>

      {actions ? <div className="cardActions">{actions}</div> : null}
    </article>
  );
}