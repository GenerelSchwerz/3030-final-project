"use client";

import "./Bttmcomponentmarketplace.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

import * as api from "../utils";

export default function BttmComponentMarketplace() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    api.fetchFeaturedListings(controller).then((data) => {
      console.log(data)
      setShoes(data);
    });

    return () => controller.abort();
  }, []);


  const handleHeartClick = (e, shoeId) => {
    e.stopPropagation(); // Stop event propagation
    console.log("Added to favorites:", shoeId);
    setShoes((prevShoes) => prevShoes.map((shoe) => (shoe.id === shoeId ? { ...shoe, favorite: !shoe.favorite } : shoe)));
  };

  const handleCartClick = (e, shoeId) => {
    e.stopPropagation(); // Stop event propagation
    console.log("Added to cart:", shoeId);
  };

  return (
    <div className="bttmComponent">
      <hr />
      <div className="category">
        <h1> Women's</h1>
      </div>

      <div className="shoe-grid">
        {shoes?.map((shoe) => (
          <Link className="shoecardbuttonlink" href={`/individualshoe?shoeId=${shoe.id}`} key={shoe.id}>
            <div className="shoe-card">
              <button className={shoe.favorite ? "favbutton active" : "favbutton"} onClick={(e) => handleHeartClick(e, shoe.id)}>
                {shoe.favorite === true ? <Heart className="heart-icon" style={{ fill: "black" }} /> : <Heart className="heart-icon" />}
              </button>
              <img src={shoe.src} alt={shoe.name} />
              <h2>{shoe.name}</h2>
              <div className="priceandplus">
                <p>${shoe.price}</p>
                <button className="cartbutton" onClick={(e) => handleCartClick(e, shoe.id)}>
                  <img src="/plussign.svg" alt="Plussing Icon" className="plussing-icon" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
