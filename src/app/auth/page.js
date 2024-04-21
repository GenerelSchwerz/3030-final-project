'use client';

import NavBar2 from "../components/nav/NavBar2";
import Carousel2 from "../components/carousel/Carousel2";
import ItemList from "../components/item-list/ItemList"

export default function Home() {

	const data = [
		{
			name: "SB Chron 2 Canvas",
			src: "/sb-chron-2-canvas.png",
			price: 65
		},
		{
			name: "SB Chron 2 Skate",
			src: "/chron-2-skate.png",
			price: 75
		},
		{
			name: "SB Force 58",
			src: "/sb-force-58.png",
			price: 80
		},
		{
			name: "SB Vertebrae",
			src: "/vertebrae.png",
			price: 85
		},
		{
			name: "SB Zoom Janoski",
			src: "/zoom-janoski.png",
			price: 95
		},

		{
			name: "SB Pogo Skate",
			src: "/sb-pogo-skate.png",
			price: 90
		}
	];

  return (
	<>
		<NavBar2 auth={true}/>
		<Carousel2 />
		<ItemList items={data} auth={true}/>
	</>
  );
}
