'use client';

import NavBar from "../components/nav/NavBar";
import Carousel from "../components/carousel/Carousel";
import ItemList from "../components/item-list/ItemList";
import { fetchFeaturedListings } from "../components/utils";
import { useState, useEffect } from "react";

// this probably isn't correct.
export default function AuthPage() {

	const [data, setData] = useState([]);

	// TODO: implement scrolling feature.
	const [idx, setIdx] = useState(0);
  
	useEffect(() => {
	  const controller = new AbortController();
  
	  fetchFeaturedListings(controller, { after: idx, limit: 10 })
		.then((data) => setData(data))
		.catch((err) => console.error(err));
  
	  return () => controller.abort();
	}, [idx, setData]);

  return (
	<>
		<NavBar auth={true}/>
		<Carousel />
		<ItemList items={data} auth={true}/>
	</>
  );
}
