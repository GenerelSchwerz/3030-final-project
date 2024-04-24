"use client";

import "./CartListings.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "../context";
import * as api from "../utils";

export default function UserListings() {

  const { user } = useAuth();
  const [shoes, setShoes] = useState([]);

  console.log(shoes);

  useEffect(() => {
	if(!user)
		return;

	const controller = new AbortController();
	let shoesArr = [];

	user.cart.forEach(id => {
		api
		.getListing(id, controller)
		.then((data) => {
			shoesArr.push(data);
		})
			.catch((err) => {
			console.log(err);
		});
	});

	setShoes(shoesArr);

    return () =>controller.abort();
  }, [user]);

  const handleDelete = (e, shoeId) => {
    e.preventDefault();
	api.removeListingFromCart(shoeId)
	.then(data => console.log(data))
	.catch(err => console.log(err));
	setShoes([]);
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
        {shoes?.map(shoe => (
          <Link className="shoecardbuttonlink" href={`/individualshoe?shoeId=${shoe.id}`} key={shoe.id}>
            <div className="shoe-card">
              <img src={shoe.sideview} alt={shoe.name} />
              <h2>{shoe.name}</h2>
              <div className="priceanddelete">
                <p>${shoe.price}</p>
                <button className="deleteButton" onClick={(e) => handleDelete(e, shoe.id)}>
                  Delete
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>) : (<></>)}
	</>
  );
}
