"use client";

import React, { useState } from "react";
import { Rating } from "flowbite-react";
import { Button } from "flowbite-react";
import { AnimatePresence, motion } from "framer-motion";

//components
import FoodCard from "./FoodCard";

//icons
import { ChevronsDown } from "lucide-react";
import { Check } from "lucide-react";

const RecommendCard = () => {
  const [isExplan, setIsExplan] = useState<Boolean>(false);
  return (
    <div className="w-100 flex-col bg-white rounded-md overflow-hidden ">
      <div className=" flex  space-x-2">
        <div
          className="
     w-5/12
        "
        >
          <img
            src="https://d68f3p45hnuiw.cloudfront.net/recipes/632aef8796ea79815d7dd614f11c0185cf14df85.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIARJQDFEJB4WB2WLCN%2F20230919%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20230919T070218Z&X-Amz-Expires=900&X-Amz-SignedHeaders=host&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDmFwLXNvdXRoZWFzdC0xIkgwRgIhAJ88v62GGjNOcJ0KMl4Nw2R7WUIyawSgMhxa3fGs2D7PAiEA8wtQvM6NJ%2Fmz4%2Bw3TAF1KqjRKUJIqZwhUbcfeb%2BqbWEqjQQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwwODkxMjcxOTkyOTkiDExY4zG4g4Vq%2BgUoESrhA7%2FGTiKMJ%2F8gq5nI64AlgPy0hIallCJj3PBViLlM2WYvkl8dFHqRJDmApt%2BZUePRsvOCDwcC6BFUoO3O%2BqExpYXmmSYXQcGga%2FCLB3ztIXCKLPM%2BDGBAwCvFxwppnyyX58F9TCtSDgeRNnOe1YUhy%2BCgVJ3hopqlsJX%2F5QOWF3ZE7Vv0RKpVrKch9yvE7Z%2FNPdqndtOIyMGY8OSIbSTWzLuTdGKJ1oTwPTY3s%2BTLr3AjNbeHvRL3X1hcKMemN3vsbVO2nISey%2FobSbN%2FSBNEFz5k%2B%2B1XiiFVjfP3GFLWkd%2FaXR8nV9n6mAnN9M2BAfbnW9zEiPb6YGsk3nhOSR2ApvtTpRdqoL6CftT3eXmqRPsTThZwsMLTSpUx6tK2NB92DyHovmcUHqwQB61ur1Sjog3RdL43RrsozIaBiEkf%2BO2q%2BVMM09cXg%2BE%2F5x%2BzAIq3Kqh479BSTTZMwFTbC%2FyiDyvl8g5XMypk3D63xyj6kcCcBU%2FCNUMKzZvxoshjWxApcwm%2FlZ84Mit76MZrFY3hEXIbckv%2BmwjdlVJ1W0P4rkd5xUOo0u8qX8iaxatSUJrX4xgatZ3mMxLZpn4rT782zVBtFGJhUHQxYcpD%2BNngnUKOcrHnMagj2DFT5nBZt5IflPowpNakqAY6pAHoy8oAFsiZXtORl6zwnbFlfI6Ijwk6dXtZ5vDKiZBVYLsx37kj%2B%2For6j47RU614sPS%2BhYivY72xJBH%2FL94yHP05FK9p%2Fjc7wa6clN%2F%2B3Qap%2F29maGztKHW9Jf6MA2FnhCKhVwigqwZuQ%2FNxD7iz2Ou1hahvUp9WKgsVFaDUPqv19d4lGyHlXuI%2FXIxZQsrI%2BDPOBw552GoWlemaDfoMu8EZ0vMPA%3D%3D&X-Amz-Signature=406b3b18524134573da76aa1a1ae5454b11f83bf0ceb1e7847767b0212b69f6d"
            alt="food"
          />
        </div>
        <div
          className="flex flex-col px-4 py-2 
         "
        >
          <h5
            className="text-xs  tracking-tight text-gray-900 dark:text-white
          md:text-xl xl:text-2xl
          "
          >
            แซนวิชหมูแดงและเครื่องดื่ม
          </h5>
          <Rating size="xs md:xl">
            <Rating.Star />
            <p
              className=" 
            text-sm font-bold text-gray-900 dark:text-white"
            >
              4.95
            </p>
          </Rating>
        </div>
      </div>
      {/* explan */}
      <AnimatePresence>
        {isExplan && (
          <motion.div
            className={`
      overflow-hidden
      flex flex-col
    pt-4
      `}
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
          >
            <p
              className="
        text-xs
        text-gray-900
        dark:text-white
        px-4
        "
            >
              <b>ปริมาณอาหารโดยประมาณ</b>
            </p>

            <p
              className="
        text-xs

        text-gray-900
        dark:text-white
        px-4 
        "
            >
              <b>วัตถุดิบในตะกร้าของคุณ</b>
            </p>
            <div className=" flex flex-col px-4 py-2 space-y-1">
              <FoodCard />
              <FoodCard />
            </div>
            <p
              className="
        text-xs

        text-gray-900
        dark:text-white
        px-4 
        "
            >
              <b>วัตถุดิบเพิ่มเติม</b>
            </p>
            <div className=" flex flex-col px-4 py-2 space-y-1">
              <FoodCard type="recommend" />
              <FoodCard type="recommend" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* //open explan footer */}
      <div
        className="flex justify-center items-center h-6 
        bg-red-500
         cursor-pointer"
        onClick={() => {
          setIsExplan(!isExplan);
        }}
      >
        <div className="flex items-center justify-center space-x-2">
          <div
            className="
              bg-white rounded-full w-4 h-4
              flex items-center justify-center
              "
          >
            <ChevronsDown
              className={`
        transform ${isExplan ? "rotate-180" : ""}
        w-3 h-3
        text-red-600
        text-bold
        `}
            />
          </div>
          <p className="text-white text-xs">ตรวจสอบส่วนผสม</p>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
