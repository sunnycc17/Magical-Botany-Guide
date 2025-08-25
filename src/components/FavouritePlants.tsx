import React from "react";

type PlantProps = {
  name: string;
  description: string;
  image: string;
  reverse?: boolean;
  index?: number; // 👈 new
};

const FavouritePlants: React.FC<PlantProps> = ({
  name,
  description,
  image,
  reverse,
  index = 0, // default to 0
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-8 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 100} // 👈 delay increases by 50ms per item
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img src={image} alt={name} className="w-80 h-full object-cover" />
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold mb-4">{name}</h2>
        <p className="text-gray-600 text-lg">{description}</p>
      </div>
    </div>
  );
};

export default FavouritePlants;
