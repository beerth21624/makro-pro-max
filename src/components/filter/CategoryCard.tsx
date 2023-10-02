import React from "react";

type CategoryCardProps = {
  name: string;
  image: string;
  onClick?: () => void;
};

const CategoryCard = ({ name, image, onClick }: CategoryCardProps) => {
  return (
    <div
      className="group relative block bg-black w-1/2 h-16 rounded-md shadow-sm
    overflow-hidden cursor-pointer  transition-all duration-200 

    "
      onClick={onClick}
    >
      <img
        alt="Developer"
        src={image}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50   brightness-75 "
      />

      <div
        className="relative 
      left-1/2
        top-1/2
        transform
        -translate-x-1/2
        -translate-y-1/2
        text-center
        group-hover:scale-110      
      "
      >
        <p
          className="text-xl font-bold text-white sm:text-2xl
        "
        >
          {name}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
