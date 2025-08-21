import { useEffect, useState } from "react";

// Define the Plant interface for TypeScript type safety
interface Plant {
  id: number;
  name: string; // scientific name
  preferred_common_name: string; // common name (user-friendly)
  default_photo?: { medium_url: string }; // optional photo
  wikipedia_url?: string; // optional link
  iconic_taxon_name?: string; // taxon category (Plantae, Animalia, etc.)
}

export default function PlantList() {
  // State to hold plant data
  const [plants, setPlants] = useState<Plant[]>([]);
  // Loading state to show a message while fetching
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch plant data from iNaturalist API
    fetch("https://api.inaturalist.org/v1/taxa?q=rose&rank=species")
      .then((res) => res.json())
      .then((data) => {
        // Filter only plants (iconic_taxon_name === "Plantae")
        const filteredPlants = data.results
          .filter((plant: any) => plant.iconic_taxon_name === "Plantae")
          // Capitalize the first letter of common names
          .map((plant: any) => ({
            ...plant,
            preferred_common_name: plant.preferred_common_name
              ? plant.preferred_common_name.charAt(0).toUpperCase() +
                plant.preferred_common_name.slice(1)
              : "Unknown Plant",
          }));

        // Save filtered and formatted plants to state
        setPlants(filteredPlants);
        // Stop loading
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array = run once on mount

  // Show a loading message while fetching
  if (loading)
    return (
      <p className="text-amber-900 text-center items-center">
        Loading magical plants...
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="hover:shadow-amber-100 p-4 card rounded-2xl shadow hover:shadow-lg transition cormorant-garamond"
            >
              {/* Plant image */}
              <img
                src={
                  plant.default_photo?.medium_url ||
                  "https://via.placeholder.com/150"
                }
                alt={plant.preferred_common_name}
                className="w-full h-40 sm:h-48 md:h-40 object-cover rounded-xl mb-2"
              />
              {/* Plant common name */}
              <h2 className="font-bold text-lg">
                {plant.preferred_common_name}
              </h2>
              {/* Plant scientific name */}
              <p className="italic text-sm text-sky-100/60">{plant.name}</p>
              {/* Optional link to Wikipedia */}
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
