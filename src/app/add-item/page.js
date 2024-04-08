'use client';

import NavBar from "../components/nav/NavBar";
import AddItem from "../components/add-item/AddItem";

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
		<AddItem/>
	</>
  );
}
