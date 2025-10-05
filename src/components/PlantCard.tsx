import React from "react";
import { Plant } from "../types/plant";

interface PlantCardProps {
  plant: Plant;
  highlight: boolean;
  reversed?: boolean;
}

const PlantCard: React.FC<PlantCardProps> = React.memo(
  ({ plant, highlight, reversed = false }) => {
    return (
      <div
        id={`plant-${plant.id}`}
        className={`flex bg-black/50 p-6 flex-col md:flex-row items-center gap-8 ${
          reversed ? "md:flex-row-reverse" : ""
        } ${highlight ? "ring-4 ring-[#a6d9ee]/40" : ""}`}
        data-aos="fade-up"
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
    );
  }
);

export default PlantCard;
