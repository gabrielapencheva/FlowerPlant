export default function FilterBar({
  search,
  setSearch,
  level,
  setLevel,
  sortBy,
  setSortBy,
}) {
  return (
    <div className="filterBar">
      <div className="field">
        <label className="label">Search</label>
        <input
          className="input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="e.g. snake, ficus, bright…"
        />
      </div>

      <div className="field">
        <label className="label">Difficulty</label>
        <select className="input" value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="All">All</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>
      </div>

      <div className="field">
        <label className="label">Sort</label>
        <select className="input" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name (A→Z)</option>
          <option value="level">Level</option>
        </select>
      </div>
    </div>
  );
}