"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/nav/NavBar2";

import * as api from "../utils";
import BttmComponentMarketplace from "../marketplace/Bttmcomponentmarketplace";

export default function SearchPage({ searchParams }) {
  const [shoeData, setShoeData] = useState(null);

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

  return (
    <>
      <NavBar />
      <BttmComponentMarketplace shoes={shoeData} />
    </>
  );
}
