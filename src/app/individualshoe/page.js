"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Individualshoepage() {
  const router = useRouter();
  const [shoeId, setShoeId] = useState(null);

  useEffect(() => {
    const { query } = router;
    if (query && query.shoeid) {
      setShoeId(query.shoeid);
    }
  }, [router]);

  const [shoes, setShoes] = useState([
    {
      id: 1,
      name: "Nike Dunk Low",
      img: "/nikedunklow.png",
      price: 79.97,
      favorite: false,
    },
    {
      id: 2,
      name: "Nike Dunk Low Retro SE",
      img: "/nikedunklowretro.png",
      price: 120,
      favorite: false,
    },
    {
      id: 3,
      name: "Nike Dunk Low Retro SE",
      img: "/nikedunklowretro.png",
      price: 120,
      favorite: false,
    },
    {
      id: 4,
      name: "Nike Dunk Low Retro SE",
      img: "/nikedunklowretro.png",
      price: 120,
      favorite: false,
    },
    {
      id: 5,
      name: "Nike Dunk Low Retro SE",
      img: "/nikedunklowretro.png",
      price: 120,
      favorite: false,
    },
    {
      id: 6,
      name: "Nike Dunk Low Retro SE",
      img: "/nikedunklowretro.png",
      price: 120,
      favorite: false,
    },
    {
      id: 7,
      name: "Nike Dunk Low Retro SE",
      img: "/nikedunklowretro.png",
      price: 120,
      favorite: false,
    },
    {
      id: 8,
      name: "Nike Dunk Low Retro SE",
      img: "/nikedunklowretro.png",
      price: 120,
      favorite: false,
    },
    {
      id: 9,
      name: "Nike Dunk Low Retro SE",
      img: "/nikedunklowretro.png",
      price: 120,
      favorite: false,
    },
    {
      id: 10,
      name: "Nike Dunk Low Retro SE",
      img: "/nikedunklowretro.png",
      price: 120,
      favorite: false,
    },
  ]);

  return (
    <div>
      <h1>Shoe ID: {shoeId}</h1>
      {/* Render shoe details based on shoeid */}
    </div>
  );
}
