"use client";
import React, { useState } from "react";
import "./AddPopup.css";

export default function AddPopup() {
  // State variables to store form inputs
  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const shoeInfo = {
      name: shoeName,
      model: model,
      price: price,
      description: description,
    }

    console.log(shoeInfo);
    // Clear form inputs after submission
    setShoeName("");
    setDescription("");
    setModel("");
    setPrice("");
    
  };

  return (
    <div className="modal" id="modal">
      <div className="body">
        <h1>New Sale</h1>
        <div className="add-picture">
          <img
            src={"./photo-gallery.svg"}
            alt="Photo Gallery"
            className="icon"
          />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="body2">
            <div className="body3">
              <div className="nameOfShoe">
                <input
                  type="text"
                  placeholder="Name of Shoe"
                  value={shoeName}
                  onChange={(e) => setShoeName(e.target.value)}
                />
              </div>
              <div className="model">
                <input
                  type="text"
                  placeholder="Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </div>
              <div className="price">
                <input
                  type="text"
                  placeholder="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>

            <div className="description">
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
