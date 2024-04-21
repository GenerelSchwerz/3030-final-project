import "./Bttmcomponentmarketplace.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

export default function BttmComponentMarketplace() {
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

  const handleShoeClick = (shoeId) => {
    console.log("Clicked on shoe with ID:", shoeId);
  };

  const handleHeartClick = (e, shoeId) => {
    e.stopPropagation(); // Stop event propagation
    console.log("Added to favorites:", shoeId);
    setShoes((prevShoes) =>
      prevShoes.map((shoe) =>
        shoe.id === shoeId ? { ...shoe, favorite: !shoe.favorite } : shoe
      )
    );
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
        {shoes.map((shoe) => (
          <Link
            className="shoecardbuttonlink"
            href={`/individualshoe?shoeId=${shoe.id}`}
            key={shoe.id}
          >
            <button
              className="shoecardbutton"
              onClick={() => handleShoeClick(shoe.id)}
              key={shoe.id}
            >
              <div className="shoe-card">
                <button
                  className={shoe.favorite ? "favbutton active" : "favbutton"}
                  onClick={(e) => handleHeartClick(e, shoe.id)}
                >
                  {shoe.favorite === true ? (
                    <Heart className="heart-icon" style={{ fill: "black" }} />
                  ) : (
                    <Heart className="heart-icon" />
                  )}
                </button>
                <img src={shoe.img} alt={shoe.name} />
                <h2>{shoe.name}</h2>
                <div className="priceandplus">
                  <p>${shoe.price}</p>
                  <button
                    className="cartbutton"
                    onClick={(e) => handleCartClick(e, shoe.id)}
                  >
                    <img
                      src="/plussign.svg"
                      alt="Plussing Icon"
                      className="plussing-icon"
                    />
                  </button>
                </div>
              </div>
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}
