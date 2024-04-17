'use client';

import NavBar from "../components/nav/NavBar";
import AddPopup from "../components/addPopup/AddPopup";

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
		<NavBar auth={true}/>
		<AddPopup/>
	</>
  );
}
