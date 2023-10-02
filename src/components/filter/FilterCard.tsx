import React from "react";

type FilterCardProps = {
  name: string;
  image: string;
  onClick?: () => void;
};

const FilterCard = ({ name, image, onClick }: FilterCardProps) => {
  return (
    <div
      className="
     bg-white 
    shadow-sm 
   rounded-sm
    p-4
    flex
    cursor-pointer
    hover:scale-105
    transition-all
    duration-200
  "
      onClick={onClick}
    >
      <div
        className="
      m-auto
     grid
      gap-2
      grid-rows-4
      "
      >
        <div className="row-span-3 flex">
          <img
            src={image}
            alt="makro pro max"
            className="w-32 m-auto object-contain "
          />
        </div>
        <h3 className="text-lg  text-slate-800 mb-4 text-center">{name}</h3>
      </div>
    </div>
  );
};

export default FilterCard;
