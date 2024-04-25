import "./Bttmcomponentmarketplace.css";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import Link from "next/link";

import { useAuth } from "../context";

import * as api from "../utils";

export default function BttmComponentMarketplace({shoes}) {

  const { user } = useAuth();

  const [cart, setCart] = useState([]);


  useEffect(() => {
    const controller = new AbortController();
    api
      .getInfo(controller)
      .then((data) => {
        setCart(data.cart);
      })
      .catch(console.error);

    return () => controller.abort();
  }, []);

  const handleHeartClick = (e, shoeId) => {
    e.stopPropagation(); // Stop event propagation
    console.log("Added to favorites:", shoeId);
    setShoes((prevShoes) => prevShoes.map((shoe) => (shoe.id === shoeId ? { ...shoe, favorite: !shoe.favorite } : shoe)));
  };

  const handleCartClick = (e, shoeId) => {
    e.stopPropagation(); // Stop event propagation
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
    <div className="bttmComponent">
      <hr />
      <div className="category">
        <h1> Women's</h1>
      </div>

      <div className="shoe-grid">
        {shoes?.map((shoe) => (
          // <Link className="shoecardbuttonlink" href={`/individualshoe?shoeId=${shoe.id}`} key={shoe.id}>
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
                  e.target.replaceWith(emptyDiv); // Replace with empty div with class name "empty-image"
                }} // Replace image with empty div if it fails to load
              />
            ) : (
              <div className="empty-image"></div>
            )}
            </Link>
            <h2>{shoe.name}</h2>
            <div className="priceandplus">
              <p>${shoe.price}</p>
              <button className="cartbutton" onClick={(e) => handleCartClick(e, shoe.id)}>
                {user != null ? (
                  <>
                  {cart.findIndex(e => e == shoe.id) == -1 ? (
                    <img src="/plussign.svg" alt="Plussing Icon" className="plussing-icon" />
                    ):(
                      <p>Remove</p>
                    )
                  }
                  </>
                ):(
                  <p>Login to purchase!</p>
                )}
              </button>
            </div>
          </div>
          // </Link>
        ))}
      </div>
    </div>
  );
}
