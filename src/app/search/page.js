"use client";

import { useEffect, useState } from "react";
import NavBar from "../components/nav/NavBar2";

import * as api from "../utils";

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
      {shoeData == null ? (
        <div>Loading...</div>
      ) : (
        shoeData.map((shoe) => (
          <div key={shoe.id} className="shoeresult">
            <img src={shoe.image} alt={shoe.name} />
            <h2>{shoe.name}</h2>
            <p>{shoe.description}</p>
          </div>
        ))
      )}
    </>
  );
}
