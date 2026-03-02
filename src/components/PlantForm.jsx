import { useEffect, useMemo, useState } from "react";

const emptyPlant = {
  commonName: "",
  scientificName: "",
  light: "",
  watering: "",
  soil: "",
  level: "Beginner",
};

export default function PlantForm({ mode = "create", initialValue, onCancel, onSave }) {
  const [plant, setPlant] = useState(emptyPlant);
  const [error, setError] = useState("");

  const title = useMemo(() => {
    return mode === "edit" ? "Edit your plant guide" : "Add a new plant guide";
  }, [mode]);

  useEffect(() => {
    if (mode === "edit" && initialValue) {
      setPlant(initialValue);
      setError("");
    }
    if (mode === "create") {
      setPlant(emptyPlant);
      setError("");
    }
  }, [mode, initialValue]);

  function updateField(key, value) {
    setPlant((p) => ({ ...p, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!plant.commonName.trim() || !plant.scientificName.trim()) {
      setError("Common name and Scientific name are required.");
      return;
    }

    setError("");
    onSave(plant);

    if (mode === "create") {
      setPlant(emptyPlant);
    }
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <div className="formHeader">
        <h2 className="h2">{title}</h2>
        <p className="muted">Fields marked with * are required.</p>
      </div>

      {error && <div className="errorBox">{error}</div>}

      <div className="formGrid">
        <div className="field">
          <label className="label">Common name *</label>
          <input
            className="input"
            value={plant.commonName}
            onChange={(e) => updateField("commonName", e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Scientific name *</label>
          <input
            className="input"
            value={plant.scientificName}
            onChange={(e) => updateField("scientificName", e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Light</label>
          <input
            className="input"
            value={plant.light}
            onChange={(e) => updateField("light", e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Watering</label>
          <input
            className="input"
            value={plant.watering}
            onChange={(e) => updateField("watering", e.target.value)}
          />
        </div>

        <div className="field span2">
          <label className="label">Soil</label>
          <input
            className="input"
            value={plant.soil}
            onChange={(e) => updateField("soil", e.target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Difficulty level</label>
          <select
            className="input"
            value={plant.level}
            onChange={(e) => updateField("level", e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
      </div>

      <div className="formActions">
        {mode === "edit" && (
          <button type="button" className="btn ghost" onClick={onCancel}>
            Cancel
          </button>
        )}
        <button type="submit" className="btn primary">
          {mode === "edit" ? "Save changes" : "Add plant"}
        </button>
      </div>
    </form>
  );
}