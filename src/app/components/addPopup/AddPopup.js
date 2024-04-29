"use client";
import React, { useState, useEffect } from "react";
import * as api from "../../utils"
import "./AddPopup.css";

export default function AddPopup(props) {

  const [shoeName, setShoeName] = useState("");
  const [description, setDescription] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [topview, setTopView] = useState("");
  const [sideview, setSideView] = useState("");
  const [frontview, setFrontView] = useState("");
  const [showModal, setShowModal] = useState("");
  const [title, setTitle] = useState("New Listing");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

	const info = {
		name: shoeName,
		model: model,
		price: parseFloat(price),
		size: size,
		topview: topview,
		sideview: sideview,
		frontview: frontview,
		description: description
	}

	api.createListing(info).then((data) => {
  		console.log(data);
		setShowModal(false);
		props.onSubmit(data);
	}).catch(err => {
		console.log(err);
		setTitle("Error");
	});
};

  const onAddItemClick = event => {
	setShowModal(!showModal);
  }

  return (
	<>
	{showModal == true ? (
	    <div className="addItemModalOverlay">
	      <div className="addItemModal">
			<button className="addItemModalExit" onClick={onAddItemClick}>x</button>
		    <h1>{title}</h1>
	        <form className="addItemForm" onSubmit={handleSubmit}>
				<div className="fieldGroup">
	              <div className="generalField">
	                <input
	                  type="text"
	                  placeholder="Name of Shoe"
	                  value={shoeName}
	                  onChange={(e) => setShoeName(e.target.value)}
	                />
	              </div>
	              <div className="generalField">
	                <input
	                  type="text"
	                  placeholder="Model"
	                  value={model}
	                  onChange={(e) => setModel(e.target.value)}
	                />
	              </div>
	              <div className="generalField">
	                <input
	                  type="text"
	                  placeholder="Price"
	                  value={price}
	                  onChange={(e) => setPrice(e.target.value)}
	                />
					</div>
	              <div className="generalField">
	                <input
	                  type="text"
	                  placeholder="Size"
	                  value={size}
	                  onChange={(e) => setSize(e.target.value)}
	                />
	              </div>
				</div>
				<div className="fieldGroup">
				  <div className="generalField">
	                <input
	                  type="text"
	                  placeholder="front view link"
	                  value={frontview}
	                  onChange={(e) => setFrontView(e.target.value)}
	                />
	              </div>
				  <div className="generalField">
	                <input
	                  type="text"
	                  placeholder="side view link"
	                  value={sideview}
	                  onChange={(e) => setSideView(e.target.value)}
	                />
	              </div>
				  <div className="generalField">
	                <input
	                  type="text"
	                  placeholder="top view link"
	                  value={topview}
	                  onChange={(e) => setTopView(e.target.value)}
	                />
	              </div>
				</div>

	            <div className="description">
	              <textarea
	                placeholder="Description"
	                value={description}
	                onChange={(e) => setDescription(e.target.value)}/>
				</div>
	          <button type="submit" className="submit">Submit</button>
	        </form>
	      </div>
	    </div>
	):(
		<div className="openAddItemContainer">
			<button className="openAddItemButton" onClick={onAddItemClick}>add item</button>
		</div>
	)
	}
	</>
  );
}
