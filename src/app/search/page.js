"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import NavBar from "../components/nav/NavBar2";
import "./page.css"

import * as api from "../utils";
import BttmComponentMarketplace from "../marketplace/Bttmcomponentmarketplace";

export default function SearchPage({ searchParams }) {
  const [shoes, setShoeData] = useState(null);

  useEffect(() => {
    const query = searchParams.q;

    const controller = new AbortController();
    api.searchListings(query, controller).then((data) => {
      if (data == null) {
        return;
      }
      setShoeData(data.listings);
    });

    return () => controller.abort();
  }, [searchParams]);

  const handleHeartClick = (e, shoeId) => {
    e.stopPropagation();
    console.log("Added to favorites:", shoeId);
    setShoes((prevShoes) => prevShoes.map((shoe) => (shoe.id === shoeId ? { ...shoe, favorite: !shoe.favorite } : shoe)));
  };

  const handleCartClick = (e, shoeId) => {
    e.stopPropagation();
    console.log("Cart:", cart);
    if (cart.some((id) => id === shoeId)) {
      console.log("Item already in cart:", shoeId, "removing");
      api
        .removeListingFromCart(shoeId)
        .then((data) => {
          console.log(data);
          setCart((prevCart) => prevCart.filter((id) => id !== shoeId));
        })
        .catch(console.error);
    } else {
      console.log("Added to cart:", shoeId);
      api
        .addListingToCart(shoeId)
        .then((data) => {
          console.log(data);
          setCart((prevCart) => [...prevCart, shoeId]);
        })
        .catch(console.error);
	  }
  };

  return (
    <>
      <NavBar />
      <BttmComponentMarketplace shoes={shoes} />
    </>
  );
}
