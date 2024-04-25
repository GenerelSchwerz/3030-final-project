"use client";

import "./UserListings.css";
import { useState, useEffect } from "react";
import EditPopup from "../components/editPopup/EditPopup"
import Link from "next/link";

import { useAuth } from "../context";
import * as api from "../utils";

export default function UserListings(props) {
  const { user } = useAuth();

  const [shoes, setShoes] = useState(null);
  const [deleteRequest, setDeleteRequest] = useState(null);

  useEffect(() => {
    if (shoes != null && user != null && deleteRequest == null) {
      return;
    }

    const controller = new AbortController();

    if (user != null && shoes == null) {
      api
        .fetchUserListings(user.id, controller)
        .then((data) => {
          console.log(data);
          setShoes(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    if (user != null && deleteRequest != null) {
      console.log("sending delete");
      api
        .deleteListing(deleteRequest, controller)
        .then((data) => {
          console.log(data);
          setDeleteRequest(null);
        })
        .catch((err) => {
          console.log(err);
          setDeleteRequest(null);
        });
    }

    return () => {
      if (
        user != null &&
        shoes != null &&
        deleteRequest == null &&
        controller != null
      ) {
        controller.abort();
      }
    };
  }, [user, deleteRequest, shoes]);

  const handleDelete = (e, shoeId) => {
    e.preventDefault();
    setDeleteRequest(shoeId);
    console.log(deleteRequest);
  };

  const handleEdit = (e, shoe) => {
	e.preventDefault();
	props.handleEdit(shoe);
  }

  return (
    <div className="bttmComponent">
      <hr />
      <div className="category">
        <h1> Your Items</h1>
      </div>

      <div className="shoe-grid">
        {shoes?.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
            <Link
              href={`/individualshoe?shoeId=${shoe.id}`}
              className="shoecardbuttonlink"
            >
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
			  <button className="editbutton" onClick={(e) => handleEdit(e, shoe)}>Edit</button>
			  <button className="deletebutton" onClick={(e) => handleDelete(e, shoe.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
