'use client';

import NavBar from "../components/nav/NavBar";
import Carousel from "../components/carousel/Carousel";
import ItemList from "../components/item-list/ItemList"

export default function Home() {

	const data = [
		{src: "/item_GreenCan.png",
		price: 1},

		{src: "/item_GreenCan.png",
		price: 2},

		{src: "/item_GreenCan.png",
		price: 3},

		{src: "/item_GreenCan.png",
		price: 4},

		{src: "/item_GreenCan.png",
		price: 5},

		{src: "/item_GreenCan.png",
		price: 6}]

  return (
	<>
		<NavBar auth={true}/>
		<Carousel />
		<ItemList items={data} auth={true}/>
	</>
  );
}
