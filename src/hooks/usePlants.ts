import { useEffect, useState } from "react";
import { Plant } from "../types/plant.ts";
import { fetchPlants } from "../services/fetchPlants.ts"

export function usePlants() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchPlants()
      .then(setPlants)
      .catch((err) => setError(err.message || "Error fetching plants"))
      .finally(() => setLoading(false));
  }, []);

  return { plants, loading, error };
}
