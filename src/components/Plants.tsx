import React from "react";
import { useQuery } from "@tanstack/react-query";

type Plant = {
  id: number;
  name: string;
  description: string;
  image: string;
};

// function to fetch the plants
const fetchPlants = async (): Promise<Plant[]> => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", import.meta.env.VITE_API_AUTH);

  const requestOptions: RequestInit = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
    mode: "cors",
  };

  const response = await fetch(
    "https://woocommerce-1181660-4488293.cloudwaysapps.com/wp-json/sunny/v1/botany",
    requestOptions
  );

  if (!response.ok) {
    throw new Error("Failed to fetch plants");
  }

  return response.json();
};

const Plants: React.FC = () => {
  const {
    data: plants,
    isLoading,
    isError,
    error,
  } = useQuery<Plant[], Error>({
    queryKey: ["plants"],
    queryFn: fetchPlants,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

  if (isLoading)
    return <p className="text-center text-lg">Loading plants...</p>;
  if (isError)
    return <p className="text-center text-red-500">{error?.message}</p>;

  // helper function to render a single plant
  const renderPlant = (plant: Plant, index: number) => (
    <div
      key={plant.id ?? index}
      className={`flex bg-black/50 p-6 flex-col md:flex-row items-center gap-8 ${
        index % 2 === 1 ? "md:flex-row-reverse" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-80 h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4 text-sky-200/70">
          {plant.name}
        </h2>
        <p className="text-white/70 text-lg">{plant.description}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-16 container mx-auto p-4 relative">
      {plants?.map((plant, index) => renderPlant(plant, index))}
    </div>
  );
};

export default Plants;
