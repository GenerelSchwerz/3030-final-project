"use client";

import NavBar from "./components/nav/NavBar";
import Carousel from "./components/carousel/Carousel";
import ItemList from "./components/item-list/ItemList";
import { useState, useEffect } from "react";
import { fetchFeaturedListings } from "./components/utils";

export default function Home() {
  const [data, setData] = useState([]);

  // TODO: allow for infinite scrolling (currently maxes out at 50 due to backend impl.)
  const [amt, setAmt] = useState(10);

  useEffect(() => {
    const controller = new AbortController();

    fetchFeaturedListings(controller, { limit: amt })
      .then((data) => setData(data))
      .catch((err) => console.error(err));

    return () => controller.abort();
  }, [amt, setData]);

  useEffect(() => {
    const handleScroll = (e) => {
      const bottom = document.body.scrollHeight - (window.scrollY + window.innerHeight) < 1;
      if (bottom) setAmt((amt) => Math.min(amt + 10, data.length + 10));
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Return a function that removes the scroll event listener
    // This function is called when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <NavBar auth={false} />
      <Carousel />
      <ItemList items={data} auth={false} />
    </>
  );
}
