"use client";

import "./UserListings.css";
import { useState, useEffect } from "react";
import EditPopup from "../components/editPopup/EditPopup";
import Link from "next/link";

import { useAuth } from "../context";
import * as api from "../utils";

export default function UserListings({ shoes, setShoes, handleEdit }) {
  const { user } = useAuth();

  // const [shoes, setShoes] = useState(null);
  const [deleteRequest, setDeleteRequest] = useState(false);

  useEffect(() => {
    if (!deleteRequest) return;
    const controller = new AbortController();
    api
      .deleteListing(deleteRequest, controller)
      .then((data) => {
        console.log(data);
        setShoes((prevShoes) => prevShoes.filter((shoe) => shoe.id !== deleteRequest));
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setDeleteRequest(false);
      });

    return () => controller.abort();
  }, [deleteRequest, setShoes]);

  const handleDelete = (e, shoeId) => {
    e.preventDefault();
    setDeleteRequest(shoeId);
    console.log(deleteRequest);
  };

  const handleEdit1 = (e, shoe) => {
    e.preventDefault();
    handleEdit(shoe);

    const foundShoe = shoes.find((s) => s.id === shoe.id);
    console.log("editing", foundShoe, shoe);
    if (!foundShoe) {
      return;
    }

    const updatedShoes = shoes.map((s) => {
      if (s.id === shoe.id) {
        return { ...s, ...shoe };
      }
      return s;
    });

    setShoes(updatedShoes);
  };

  return (
    <div className="bttmComponent">
      <hr />
      <div className="category">
        <h1> Your Items</h1>
      </div>

      <div className="shoe-grid">
        {shoes?.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
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
              <button className="editbutton" onClick={(e) => handleEdit1(e, shoe)}>
                Edit
              </button>
              <button className="deletebutton" onClick={(e) => handleDelete(e, shoe.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
