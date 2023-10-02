"use client";
import React, { useState } from "react";

//icon
import { Trash } from "lucide-react";
import { Plus } from "lucide-react";
import { Minus } from "lucide-react";

const CardProductCard = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="w-100 flex-col border-b border-gray-200 mb-2 pb-2">
      <div className="flex">
        <div className="flex justify-center items-center w-24 h-24">
          <img
            src="https://www.makro.pro/_next/image?url=https%3A%2F%2Fimages.mango-prod.siammakro.cloud%2FSOURCE%2F5e49563d25fb4ffd9bc363b5104b50d7&w=1200&q=75"
            alt="makro pro max"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-md">เอโร่ หมูบดแช่แข็ง 1 กก.</p>
          <p className="text-sm text-gray-600">1 หน่วย</p>
          <p className="text-md">115.00 บาท</p>
        </div>
      </div>
      <div className="flex justify-between items-center px-8">
        <Trash />
        <div
          className="flex border-red-600 border-2 rounded-full cursor-pointer text-red-600
        "
        >
          <div
            className=" flex justify-center items-center w-8 h-8"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <Minus size={20} />
          </div>
          <div className=" flex justify-center items-center w-16 h-8">
            <p>{quantity}</p>
          </div>
          <div
            className=" flex justify-center items-center w-8 h-8     cursor-pointer"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductCard;
