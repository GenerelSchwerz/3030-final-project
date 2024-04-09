'use client';

import NavBar from "../components/nav/NavBar";
import AddPopup from "../components/addPopup/AddPopup";
import Carousel from "../components/carousel/Carousel";

import { fetchFeaturedListings } from "../components/utils";
import { useState, useEffect } from "react";

export default function AddItemPage() {


  return (
	<>
		<NavBar auth={true}/>
		<AddPopup/>
	</>
  );
}
