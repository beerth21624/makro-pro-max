import React from "react";

type ProductCardProps = {
  name: string;
  image: string;
  types?: any;
};

const ProductCard = ({ name, image, types = [] }: ProductCardProps) => {
  return (
    <div className="bg-white shadow-sm rounded-sm p-2 md:p-4 w-full">
      <div className="flex flex-col  h-full ">
        <div className="flex gap-2 flex-wrap">
          {types.map((item: any, index: number) => (
            <div
              key={index}
              className="
              bg-red-100
              text-red-600
              rounded-full
              px-2
              py-1
              text-xs
              "
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className="flex justify-center items-center 
        w-full
        h-28
        md:h-36
        overflow-hidden
        my-4
        "
        >
          <img
            src={image}
            alt="makro pro max"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col  justify-between">
          <h3
            className="
          text-sm
        md:text-lg
         text-slate-800 mb-2 md:mb-4"
          >
            {name}
          </h3>
          <div className="flex flex-col">
            <p className="text-md text-red-600">
              <b>จำนวน 1 ชิ้น</b>
            </p>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-center">
                <p
                  className="
              text-xs
              md:text-sm
            
             text-slate-600"
                >
                  วันหมดอายุ 01/01/2022
                </p>
                <p
                  className=" text-xs
              md:text-sm
             text-slate-600"
                >
                  เลขที่สั่งซื้อ 123456789
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
