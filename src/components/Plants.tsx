import React, { useEffect, useRef, useState } from "react";

export type Plant = {
  id: number;
  name: string;
  description: string;
  image: string;
};

interface PlantsProps {
  selectedPlantId: number | null;
}

const fetchPlants = async (): Promise<Plant[]> => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", import.meta.env.VITE_API_AUTH);

  const response = await fetch(
    "https://woocommerce-1181660-4488293.cloudwaysapps.com/wp-json/sunny/v1/botany",
    { method: "GET", headers: myHeaders, redirect: "follow", mode: "cors" }
  );

  if (!response.ok) throw new Error("Failed to fetch plants");

  return response.json();
};

const Plants: React.FC<PlantsProps> = ({ selectedPlantId }) => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [visibleCount, setVisibleCount] = useState(4);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [highlightId, setHighlightId] = useState<number | null>(null);
  const highlightTimeoutRef = useRef<number | null>(null);

  // Track last highlighted plant to prevent repeated scrolls on Load More
  const lastHighlightedRef = useRef<number | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchPlants()
      .then(setPlants)
      .catch((err) => setError(err.message || "Error fetching plants"))
      .finally(() => setLoading(false));
  }, []);

  // Scroll and highlight when a new plant is selected
  useEffect(() => {
    if (!selectedPlantId || !plants.length) return;
    if (lastHighlightedRef.current === selectedPlantId) return; // skip if already highlighted

    const selectedIndex = plants.findIndex((p) => p.id === selectedPlantId);
    if (selectedIndex === -1) return;

    // Ensure the selected plant is rendered
    if (selectedIndex >= visibleCount) setVisibleCount(selectedIndex + 1);

    // Scroll and highlight
    setTimeout(() => {
      const el = document.getElementById(`plant-${selectedPlantId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlightId(selectedPlantId);

        if (highlightTimeoutRef.current)
          window.clearTimeout(highlightTimeoutRef.current);

        highlightTimeoutRef.current = window.setTimeout(
          () => setHighlightId(null),
          3000
        );

        lastHighlightedRef.current = selectedPlantId;
      }
    }, 50); // slight delay to ensure element is rendered
  }, [selectedPlantId, plants, visibleCount]);

  if (loading) return <p className="text-center text-lg">Loading plants...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const displayedPlants = plants.slice(0, visibleCount);

  return (
    <div className="space-y-24 container mx-auto p-4 relative">
      {displayedPlants.map((plant, index) => (
        <div
          id={`plant-${plant.id}`}
          key={plant.id}
          className={`flex bg-black/50 p-6 flex-col md:flex-row items-center gap-8 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          } ${highlightId === plant.id ? "ring-4 ring-[#a6d9ee]/40" : ""}`}
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-80 h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-sky-200/70">
              {plant.name}
            </h2>
            <p className="text-white/70 text-lg">{plant.description}</p>
          </div>
        </div>
      ))}

      {visibleCount < plants.length && (
        <div className="text-center mt-5 pb-8">
          <button
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="inline-block px-14 py-5 rounded-full
              bg-gradient-to-r from-[#4AC8FF] via-[#00F0FF] to-[#72D9FF]
              text-stone-900 font-bold tracking-wide shadow-lg cinzel-bold
              transition-all duration-300 ease-in-out
              hover:shadow-[0_0_25px_rgba(74,200,255,0.7)]
              active:scale-95 active:shadow-[0_0_15px_rgba(74,200,255,0.5)] cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Plants;
