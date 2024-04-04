'use client';

import NavBar from "./components/nav/NavBar";
import Carousel from "./components/carousel/Carousel";
import "./global.css"

export default function Home() {
  return (
	<main>
		<NavBar auth={true}/>
		<Carousel />
	</main>
  );
}
