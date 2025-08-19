import { useEffect, useState } from "react";

interface Plant {
  id: number;
  name: string;
  preferred_common_name: string;
  default_photo?: { medium_url: string };
  wikipedia_url?: string;
}

export default function PlantList() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.inaturalist.org/v1/taxa?q=rose&rank=species")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data.results);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-amber-900">Loading magical plants...</p>;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="p-4 card rounded-2xl shadow hover:shadow-lg transition cormorant-garamond"
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
                {plant.preferred_common_name || "Unknown Plant"}
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
