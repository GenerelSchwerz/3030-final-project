'use client';

import NavBar from "./components/nav/NavBar";
import Carousel from "./components/carousel/Carousel";
import ItemList from "./components/item-list/ItemList"

export default function Home() {

	const data = [
		{src: "/slider_beigeDunks.png",
		price: 1},

		{src: "/slider_grayDunks.png",
		price: 2},

		{src: "/slider_lilacDunks.png",
		price: 3}]

  return (
	<>
		<NavBar auth={true}/>
		<Carousel />
		<ItemList items={data}/>
	</>
  );
}
