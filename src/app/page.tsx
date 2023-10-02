"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

//import useHistory
import useHistory from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, []);

  return <div className="py-8 grid gap-4  grid-cols-2 h-full"></div>;
}
