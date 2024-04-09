"use client";

import NavBar from "./components/nav/NavBar";
import Carousel from "./components/carousel/Carousel";
import ItemList from "./components/item-list/ItemList";
import { useState, useEffect } from "react";
import { fetchFeaturedListings } from "./components/utils";

export default function Home() {
  const [data, setData] = useState([]);

  // TODO: implement scrolling feature.
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    fetchFeaturedListings(controller, { after: idx, limit: 10 })
      .then((data) => setData(data))
      .catch((err) => console.error(err));

    return () => controller.abort();
  }, [idx, setData]);

  return (
    <>
      <NavBar auth={false} />
      <Carousel />
      <ItemList items={data} auth={false} />
    </>
  );
}
