"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";
import NavBar from "../components/nav/NavBar2";
import "./page.css"

import * as api from "../utils";

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
	  <div className="bttmComponent">
      {shoes == null ? (
        <div>Loading...</div>
      ) : (
		<>
		<h1 className="category">{searchParams.q}</h1>
      <div className="shoe-grid">
        {shoes?.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
            <button className={shoe.favorite ? "favbutton active" : "favbutton"} onClick={(e) => handleHeartClick(e, shoe.id)}>
              {shoe.favorite === true ? <Heart className="heart-icon" style={{ fill: "black" }} /> : <Heart className="heart-icon" />}
            </button>
            <Link href={`/individualshoe?shoeId=${shoe.id}`} className="shoecardbuttonlink">
            {shoe.sideview ? (
              <img
                src={shoe.sideview}
                alt={shoe.name}
                onError={(e) => {
                  const emptyDiv = document.createElement("div");
                  emptyDiv.className = "empty-image";
                  e.target.replaceWith(emptyDiv);
                }}
              />
            ) : (
              <div className="empty-image"></div>
            )}
            </Link>
            <h2>{shoe.name}</h2>
            <div className="priceandplus">
              <p>${shoe.price}</p>
              <button className="cartbutton" onClick={(e) => handleCartClick(e, shoe.id)}>
                <img src="/plussign.svg" alt="Plussing Icon" className="plussing-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
	  </>
    )}
	</div>
	</>
  );
}
