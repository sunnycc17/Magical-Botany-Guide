import { useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";

interface Plant {
  id: number;
  name: string;
  preferred_common_name: string;
  default_photo?: { medium_url: string };
  wikipedia_url?: string;
  iconic_taxon_name?: string;
}

export default function PlantList() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.inaturalist.org/v1/taxa?q=rose&rank=species")
      .then((res) => res.json())
      .then((data) => {
        const filteredPlants = data.results
          .filter((plant: any) => plant.iconic_taxon_name === "Plantae")
          .map((plant: any) => ({
            ...plant,
            preferred_common_name: plant.preferred_common_name
              ? plant.preferred_common_name.charAt(0).toUpperCase() +
                plant.preferred_common_name.slice(1)
              : "Unknown Plant",
          }));

        setPlants(filteredPlants);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
            : plants.map((plant) => (
                <div
                  key={plant.id}
                  className="hover:shadow-amber-100 p-4 card rounded-2xl shadow hover:shadow-lg transition cormorant-garamond"
                >
                  <img
                    src={
                      plant.default_photo?.medium_url ||
                      "https://via.placeholder.com/150"
                    }
                    alt={plant.preferred_common_name}
                    className="w-full h-40 sm:h-48 md:h-40 object-cover rounded-xl mb-2"
                  />
                  <h2 className="font-bold text-lg">
                    {plant.preferred_common_name}
                  </h2>
                  <p className="italic text-sm text-sky-100/60">{plant.name}</p>
                  {plant.wikipedia_url && (
                    <a
                      href={plant.wikipedia_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-300/70 text-sm underline"
                    >
                      Learn more
                    </a>
                  )}
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
