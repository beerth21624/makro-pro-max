"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

//components
import MyProduct from "@/components/product/MyProduct";
import Recommend from "@/components/product/Recommend";
import FilterCard from "@/components/filter/FilterCard";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "flowbite-react";
import TimeLine from "@/components/product/TimeLine";
import Cart from "@/components/product/Cart";

//mock data
import { allProducts, productTypes } from "@/data/MockProduct";

type ProductType = {
  name: string;
  image: string;
  price: number;
};

export default function Home() {
  const router = useRouter();

  return (
    <div className="py-8">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-slate-800 mb-4">
          สุขภาพที่ดี คือ ความสำเร็จของคุณ
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {productTypes.map((type: String, index: number) => (
          <div
            key={index}
            className="h-8 px-4 bg-red-100 text-red-600 rounded-sm  text-xs flex items-center justify-center hover:bg-red-600 hover:text-white
            border border-red-600
            "
          >
            <p>{type}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {allProducts.map((product: ProductType, index: number) => (
          <ProductCard
            key={index}
            name={product.name}
            image={product.image}
            price={product.price}
            onClick={() => router.push("/product")}
          />
        ))}
      </div>
      {/* <div className="mt-8 bg-white p-8">
        <TimeLine />
      </div> */}
    </div>
  );
}
