"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

//components
import Cart from "./product/Cart";

//icons
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <nav className="w-full h-20 bg-white shadow-lg">
        <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl">
          <div className="flex items-center"
            onClick={() => {
              router.push("/home")
            }}
          >
            <img
              src="https://www.makro.pro/_next/static/media/makro-pro-logo.020dd5ed.svg"
              alt="makro pro max"
              className="h-8"
            />
            <div className="ml-2  bg-red-600 px-2 rounded-xl flex">
              <h3 className="text-sm font-bold  text-white">MAX</h3>
            </div>
          </div>
          <ShoppingCart onClick={() => setCartOpen(true)} />
        </div>
      </nav>
      <Cart
        isOpen={cartOpen}
        onClose={() => {
          setCartOpen(false);
        }}
      />
    </>
  );
}
