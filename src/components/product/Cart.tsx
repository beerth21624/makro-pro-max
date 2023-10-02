import React from "react";
import { Button, Modal } from "flowbite-react";
import { useRouter } from "next/navigation";

import { Label, TextInput } from "flowbite-react";

//components
import CardProductCard from "@/components/product/CardProductCard";

//icons
import { X } from "lucide-react";
import { MapPin } from "lucide-react";

type CardProps = {
  isOpen: boolean;
  onClose: () => void;
};

const Cart = ({ isOpen, onClose }: CardProps) => {
  const router = useRouter();
  return (
    <Modal
      position="top-right"
      show={isOpen}
      onClose={() => {
        onClose();
      }}
    >
      <Modal.Body
        className="relative min-h-[96vh] h-full  flex flex-col justify-between shadow-sm overflow-hidden"
        aria-modal="true"
        role="dialog"
        tabIndex={-1}
      >
        <div className="flex flex-col gap-4">
          <div
            className="flex flex-col
            pb-4
          border-b border-gray-300

          "
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium text-gray-900">ตะกร้า</h3>
              <X
                onClick={() => {
                  onClose();
                }}
              />
            </div>
            <div className="flex justify-center items-center px-4 mt-2">
              <div className="border-gray-200 border-2 rounded-md px-2 py-1  text-xs w-full h-12 flex items-center">
                <MapPin className="text-red-600" />
                <div
                  className="text-gray-600 ml-2 overflow-hidden overflow-ellipsis w-full 
                "
                >
                  จัดส่งที่ : 2 ซอย สุขุมวิท 77 แขวง พระโขนงเหนือ เขตวัฒนา
                  กรุงเทพมหานคร 10260
                </div>
              </div>
            </div>
          </div>
          <div
            className="overflow-y-auto h-[calc(96vh-470px)]
          "
          >
            <CardProductCard />
            <CardProductCard />
            <CardProductCard />
            <CardProductCard />
            <CardProductCard />
            <CardProductCard />
            <CardProductCard />
            <CardProductCard />
          </div>

          <div
            className="bg-gray-100 px-4 py-2 rounded-md 
           flex flex-col justify-between
          "
          >
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">ราคาสินค้า</p>
              <p className="text-sm text-gray-600">1300.00 บาท</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">ค่าจัดส่ง</p>
              <p className="text-sm text-gray-600">0.00 บาท</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-sm text-gray-600">รวม</p>
              <p className="text-sm text-gray-600">1300.00 บาท</p>
            </div>
          </div>
          <Button
            gradientMonochrome="failure"
            onClick={() => {
              onClose();
              router.push("/recommend");
            }}
          >
            เมนูอาหารแนะนำ
          </Button>
        </div>
        <div
          className="
        
          bg-white
  
     flex flex-col
          w-full
          border-radius-b-xl
          absolute
            bottom-0
            left-0
        "
        >
          <div
            className=" flex items-center w-full px-8 border-t border-gray-300 py-4 
          "
          >
            <div className="flex flex-col w-full ">
              <TextInput
                id="small"
                sizing="sm"
                type="text"
                placeholder="ใส่โค้ดส่วนลด"
              />
            </div>
          </div>
          <div className="border-b border-gray-300 w-full mb-4"></div>
          <div
            className=" flex
        justify-between
        items-center px-8 py-4"
          >
            <div className="flex flex-col ">
              <p className="text-lg text-red-600">
                <b>1300.00 บาท</b>
              </p>
              <p className="text-xs text-gray-600">
                <span className="text-green-600">+ ฟรี</span> ค่าจัดส่ง
              </p>
            </div>
            <Button color="failure" pill className="px-4">
              เช็คเอาท์
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Cart;
