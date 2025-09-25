import React, { useState, useEffect, useRef } from "react";
import { Plant } from "./Plants";

interface HeaderProps {
  onSelectPlant: (plant: Plant) => void;
}

const fetchPlants = async (query: string): Promise<Plant[]> => {
  if (!query) return [];

  const myHeaders = new Headers();
  myHeaders.append("Authorization", import.meta.env.VITE_API_AUTH);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    mode: "cors",
  };

  const response = await fetch(
    `https://woocommerce-1181660-4488293.cloudwaysapps.com/wp-json/sunny/v1/botany/${query}`,
    requestOptions
  );

  if (!response.ok) throw new Error("Failed to fetch plants");

  return response.json();
};

const Header: React.FC<HeaderProps> = ({ onSelectPlant }) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(search), 300);
    return () => clearTimeout(handler);
  }, [search]);

  useEffect(() => {
    // open dropdown when there is a value
    setIsOpen(Boolean(debouncedSearch));
  }, [debouncedSearch]);

  // close on outside click
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // fetch results (small local wrapper so we can still use react-query if desired)
  const [results, setResults] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    if (!debouncedSearch) {
      setResults([]);
      setLoading(false);
      setFetchError(null);
      return;
    }
    let cancelled = false;
    setLoading(true);
    setFetchError(null);

    fetchPlants(debouncedSearch)
      .then((r) => {
        if (cancelled) return;
        setResults(r);
      })
      .catch((err) => {
        if (cancelled) return;
        setFetchError(err.message || "Error fetching plants");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [debouncedSearch]);

  const handleSelect = (plant: Plant) => {
    onSelectPlant(plant); // signal App/Plants to scroll & highlight
    setSearch(""); // clear input
    setDebouncedSearch(""); // close dropdown via effect
    setIsOpen(false);
  };

  return (
    <header className="w-full p-4 sm:p-6 bg-black/50 backdrop-blur-md text-gray-300 shadow-md fixed top-0 z-50 flex flex-col sm:flex-row items-center sm:justify-between gap-4">
      <h1 className="text-2xl sm:text-3xl font-bold cinzel-regular text-center sm:text-left">
        Magical Botany Guide
      </h1>

      <div className="w-full sm:w-1/3 relative" ref={containerRef}>
        <input
          type="text"
          placeholder="Search plants..."
          className="w-full px-4 py-2 rounded-md bg-black/30 backdrop-blur-sm border border-[#d4f1fe] placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-[#a6d9ee] transition cormorant"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(Boolean(debouncedSearch))}
        />

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md border border-t-0 border-[#d4f1fe] max-h-64 overflow-y-auto z-50">
            {loading ? (
              <p className="text-white/70 p-2">Loading...</p>
            ) : fetchError ? (
              <p className="text-red-400 p-2">Error fetching plants</p>
            ) : results.length > 0 ? (
              results.slice(0, 8).map((plant) => (
                <div
                  key={plant.id}
                  className="text-white py-2 px-3 hover:bg-[#a6d9ee]/20 cursor-pointer"
                  onClick={() => handleSelect(plant)}
                >
                  {plant.name}
                </div>
              ))
            ) : (
              <p className="text-white/50 p-2">No plants found</p>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
