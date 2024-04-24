"use client";

import "./CartListings.css";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "../context";
import * as api from "../utils";

export default function UserListings() {
  const { user } = useAuth();
  const [shoes, setShoes] = useState([]);

  const cb = useCallback(
    async (controller) => {
      const user1 = user;
      // .then((user1) => {
      if (user1 == null) return;
      if (user1.cart == null) return;

      let shoesArr = [];

      await Promise.all(
        user1.cart.map(async (id) => {
          const data = await api.getListing(id, controller);
          if (data == null) return;
          shoesArr.push(data);
        })
      );

      shoesArr.sort((a, b) => a.id - b.id);

      setShoes(shoesArr);
    },
    [user]
  );

  useEffect(() => {
    const controller = new AbortController();
    cb(controller);
    return () => controller.abort();
  }, [cb]);

  const handleDelete = (e, shoeId) => {
    e.preventDefault();
    api
      .removeListingFromCart(shoeId)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    setShoes(shoes.filter((shoe) => shoe.id !== shoeId));
  };

  return (
	<>
	{shoes.length > 0 ? (
    <div className="userListings">
      <hr />
      <div className="category">
        <h1>Cart</h1>
      </div>

      <div className="shoe-grid">
        {shoes?.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
            <Link className="shoecardbuttonlink" href={`/individualshoe?shoeId=${shoe.id}`} key={shoe.id}>
              <img src={shoe.sideview} alt={shoe.name} />
            </Link>
            <h2>{shoe.name}</h2>
            <div className="priceanddelete">
              <p>${shoe.price}</p>
              <button className="deleteButton" onClick={(e) => handleDelete(e, shoe.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>) : (<></>)}
	</>
  );
}
