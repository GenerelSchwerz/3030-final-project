"use client";
import React, { useState, useEffect } from "react";
import * as api from "../../utils";
import "./EditPopup.css";

export default function AddPopup({ shoe, updateShoe, display, onExit }) {
  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [topview, setTopView] = useState("");
  const [sideview, setSideView] = useState("");
  const [frontview, setFrontView] = useState("");
  const [title, setTitle] = useState("Edit Listing");
  const [sawData, setSawData] = useState(false);

  if (!sawData && shoe != null) {
    setShoeName(shoe.name);
    setDescription(shoe.description);
    setModel(shoe.model);
    setPrice(shoe.price);
    setSize(shoe.size);
    setTopView(shoe.size);
    setFrontView(shoe.frontview);
    setSideView(shoe.sideview);
    setSawData(true);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let info = {
      name: shoeName,
      model: model,
      price: parseFloat(price),
      size: size,
      topview: topview,
      sideview: sideview,
      frontview: frontview,
      description: description,
      id: shoe.id,
    };

    api
      .editListing(info)
      .then((data) => {
        console.log(data);
        updateShoe({
          ...shoe,
          name: shoeName,
          model: model,
          price: parseFloat(price),
          size: size,
          topview: topview,
          sideview: sideview,
          frontview: frontview,
          description: description,
          id: shoe.id,
        });
      })
      .catch(console.error);
  };

  return (
    <>
      {display == true ? (
        <div className="editItemModalOverlay">
          <div className="editItemModal">
            <button className="addItemModalExit" onClick={onExit}>
              x
            </button>
            <h1>{title}</h1>
            <form className="addItemForm" onSubmit={handleSubmit}>
              <div className="fieldGroup">
                <div className="generalField">
                  <input type="text" placeholder="Name of Shoe" value={shoeName} onChange={(e) => setShoeName(e.target.value)} />
                </div>
                <div className="generalField">
                  <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} />
                </div>
                <div className="generalField">
                  <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div className="generalField">
                  <input type="text" placeholder="Size" value={size} onChange={(e) => setSize(e.target.value)} />
                </div>
              </div>
              <div className="fieldGroup">
                <div className="generalField">
                  <input type="text" placeholder="front view link" value={frontview} onChange={(e) => setFrontView(e.target.value)} />
                </div>
                <div className="generalField">
                  <input type="text" placeholder="side view link" value={sideview} onChange={(e) => setSideView(e.target.value)} />
                </div>
                <div className="generalField">
                  <input type="text" placeholder="top view link" value={topview} onChange={(e) => setTopView(e.target.value)} />
                </div>
              </div>

              <div className="description">
                <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
              </div>
              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
