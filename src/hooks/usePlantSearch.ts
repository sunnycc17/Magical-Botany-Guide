import { useState, useEffect } from "react";
import { Plant } from "../types/plant";
import { fetchPlantByQuery } from "../services/fetchplants";

export function usePlantSearch(query: string) {
  const [results, setResults] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    const controller = new AbortController();
    setLoading(true);
    setError(null);

    fetchPlantByQuery(query, controller.signal)
      .then(setResults)
      .catch((err) => {
        if (err.name !== "AbortError")
          setError(err.message || "Error fetching plants");
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [query]);

  return { results, loading, error };
}
