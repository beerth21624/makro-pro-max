"use client";

import React from "react";
import { useRouter } from "next/navigation";

//components
import { Button } from "flowbite-react";

//icons
import { Check } from "lucide-react";
import { Store } from "lucide-react";
import { ChevronRight } from "lucide-react";

type FoodCardType = {
    type?: "success" | "recommend";
};

const FoodCard = ({ type = "success" }: FoodCardType) => {
    const router = useRouter();
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center space-x-1">
                {type === "success" && (
                    <Button
                        gradientMonochrome="lime"
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                    >
                        <Check className="w-3 h-3 text-white" />
                    </Button>
                )}
                {type === "recommend" && (
                    <Button
                        gradientDuoTone="redToYellow"
                        className="w-4 h-4 rounded-full flex items-center justify-center"
                    >
                        <Store className="w-3 h-3 text-white" />
                    </Button>
                )}
                <p className="text-xs">เนื้อหมูสับ</p>
            </div>
            {type === "success" && <p className="text-xs">จำนวน 1 ชิ้น</p>}
            {type === "recommend" && (
                <div className="flex items-center  text-red-600 cursor-pointer" onClick={() => {
                    router.push("/home")
                }} >
                    <p className="text-xs">ไปยังร้านค้า</p>
                    <ChevronRight className="w-3 h-3" />
                </div>
            )}
        </div>
    );
};

export default FoodCard;
