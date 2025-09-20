import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

type Plant = {
  id: number;
  name: string;
  description: string;
  image: string;
};

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
  const [visibleCount, setVisibleCount] = useState(4); // show 4 at first
  const {
    data: plants,
    isLoading,
    isError,
    error,
  } = useQuery<Plant[], Error>({
    queryKey: ["plants"],
    queryFn: fetchPlants,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading)
    return <p className="text-center text-lg">Loading plants...</p>;
  if (isError)
    return <p className="text-center text-red-500">{error?.message}</p>;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="space-y-24  container mx-auto p-4 relative">
      {plants?.slice(0, visibleCount).map((plant, index) => (
        <div
          key={plant.id ?? index}
          className={`flex bg-black/50 p-6 flex-col md:flex-row items-center gap-8 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
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

      {/* Load More Button */}
      {plants && visibleCount < plants.length && (
        <div className="text-center mt-5 pb-8">
          <button
            onClick={handleLoadMore}
            className=" inline-block px-14 py-5 rounded-full
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
