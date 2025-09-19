import React, { useEffect, useState } from "react";
import FavouritePlants from "./FavouritePlants";

type Plant = {
  id: number;
  name: string;
  description: string;
  image: string;
};

const FavouritePlantsList: React.FC = () => {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", import.meta.env.VITE_API_AUTH);

    const requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
      mode: "cors", // ✅ explicitly request CORS
    };

    fetch(
      "https://woocommerce-1181660-4488293.cloudwaysapps.com/wp-json/sunny/v1/botany",
      requestOptions
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch plants");
        return response.json();
      })
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching plants:", err);
        setError("Could not load plants 😢");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-lg">Loading plants...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="space-y-16">
      {plants.map((plant, index) => (
        <FavouritePlants
          key={plant.id ?? index}
          name={plant.name}
          description={plant.description}
          image={plant.image}
          reverse={index % 2 === 1}
          index={index}
        />
      ))}
    </div>
  );
};

export default FavouritePlantsList;
