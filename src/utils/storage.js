const KEY = "flowerplant_my_plants_v1";

export function loadPlants() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function savePlants(plants) {
  localStorage.setItem(KEY, JSON.stringify(plants));
}