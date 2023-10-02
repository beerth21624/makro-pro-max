import React from "react";

//components
import RecommendCard from "@/components/recommend/RecommendCard";

const page = () => {
  return (
    <div className="flex flex-col mt-4">
      <h3 className="text-xl font-bold text-slate-800">
        เมนูจากวัตถุดิบทีในตะกร้าของคุณ
      </h3>
      <div className="flex flex-col gap-4 my-4">
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
        <RecommendCard />
      </div>
      <div
        className="
    bg-white
    shadow-lg
    rounded-xl
    p-4
    w-full
    mt-4
  "
      >
        <h3 className="text-sm font-bold text-slate-800">
          สรุปรายการอาหาร
        </h3>
        <div className="flex flex-col gap-4 my-4"></div>

      </div>
    </div>
  );
};

export default page;
