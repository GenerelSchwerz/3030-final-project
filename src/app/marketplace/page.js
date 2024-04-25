"use client";

import NavBar from "../components/nav/NavBar2";
import Carousel2 from "../components/carousel/Carousel2";
import Bttmcomponentmarketplace from "./Bttmcomponentmarketplace";

import { useState, useEffect } from "react";

import * as api from "../utils";

export default function Marketplace() {

  const [shoes, setShoes] = useState([])

  useEffect(() => {
    const controller = new AbortController();
    api
      .fetchFeaturedListings(controller)
      .then((data) => {
        console.log(data);
        setShoes(data);
      })
      .catch(console.error);

    return () => controller.abort();
  }, []);


  return (
   
      <>   <NavBar />
      <Carousel2 />
      <Bttmcomponentmarketplace shoes={shoes} /></>
  );
}
