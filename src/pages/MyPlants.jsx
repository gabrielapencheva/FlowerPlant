import { useEffect, useMemo, useRef, useState } from "react";
import PlantCard from "../components/PlantCard";
import PlantForm from "../components/PlantForm";
import FilterBar from "../components/FilterBar";
import { loadPlants, savePlants } from "../utils/storage";

function makeId() {
  const c = globalThis.crypto;
  if (c && typeof c.randomUUID === "function") return c.randomUUID();
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export default function MyPlants() {
  const [plants, setPlants] = useState([]);
  const [editingId, setEditingId] = useState(null);

  
  const [message, setMessage] = useState("");

  // filters
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  
  const hasHydrated = useRef(false);

  
  useEffect(() => {
    setPlants(loadPlants());
  }, []);

  
  useEffect(() => {
    if (!hasHydrated.current) {
      hasHydrated.current = true;
      return;
    }
    savePlants(plants);
  }, [plants]);

  const editingPlant = useMemo(
    () => plants.find((p) => p.id === editingId) || null,
    [plants, editingId]
  );

  const filteredPlants = useMemo(() => {
    const q = search.trim().toLowerCase();

    let result = plants.filter((p) => {
      const matchesSearch =
        !q ||
        (p.commonName || "").toLowerCase().includes(q) ||
        (p.scientificName || "").toLowerCase().includes(q) ||
        (p.light || "").toLowerCase().includes(q);

      const matchesLevel = level === "All" || p.level === level;

      return matchesSearch && matchesLevel;
    });

    if (sortBy === "name") {
      result = [...result].sort((a, b) => (a.commonName || "").localeCompare(b.commonName || ""));
    } else if (sortBy === "level") {
      const order = { Beginner: 1, Intermediate: 2, Expert: 3 };
      result = [...result].sort((a, b) => (order[a.level] || 99) - (order[b.level] || 99));
    }

    return result;
  }, [plants, search, level, sortBy]);

  function handleCreate(newPlant) {
    const plantToAdd = { ...newPlant, id: makeId() };
    setPlants((prev) => [plantToAdd, ...prev]);

    setMessage("Plant added successfully!");
    setTimeout(() => setMessage(""), 2500);
  }

  function handleDelete(id) {
    const ok = confirm("Delete this plant guide?");
    if (!ok) return;

    setPlants((prev) => prev.filter((p) => p.id !== id));
    if (editingId === id) setEditingId(null);

    setMessage("Plant deleted.");
    setTimeout(() => setMessage(""), 2000);
  }

  function handleStartEdit(id) {
    setEditingId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSaveEdit(updatedPlant) {
    setPlants((prev) =>
      prev.map((p) => (p.id === editingId ? { ...p, ...updatedPlant } : p))
    );
    setEditingId(null);

    setMessage("Plant updated successfully!");
    setTimeout(() => setMessage(""), 2500);
  }

  return (
    <div className="stack">
      <div className="sectionHeader">
        <h1 className="h1">My Plants</h1>

       
        <p className="muted">
          Create, read, update, and delete your personal plant care guides.
        </p>

        {message && <div className="successBox">{message}</div>}
      </div>

      {editingId ? (
        <PlantForm
          mode="edit"
          initialValue={editingPlant}
          onCancel={() => setEditingId(null)}
          onSave={handleSaveEdit}
        />
      ) : (
        <PlantForm mode="create" onSave={handleCreate} />
      )}

      <FilterBar
        search={search}
        setSearch={setSearch}
        level={level}
        setLevel={setLevel}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {filteredPlants.length === 0 ? (
        <div className="card">
          <h2 className="h2">No plants found</h2>
          <p className="muted">Try changing the filter or add your first plant guide above.</p>
        </div>
      ) : (
        <div className="cardsGrid">
          {filteredPlants.map((p) => (
            <PlantCard
              key={p.id}
              plant={p}
              actions={
                <>
                  <button className="btn" onClick={() => handleStartEdit(p.id)}>
                    Edit
                  </button>
                  <button className="btn danger" onClick={() => handleDelete(p.id)}>
                    Delete
                  </button>
                </>
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}