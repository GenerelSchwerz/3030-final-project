"use client";

import NavBar from "../components/nav/NavBar2";
import Carousel2 from "../components/carousel/Carousel2";
import Bttmcomponentmarketplace from "./Bttmcomponentmarketplace";
import { AuthProvider } from "../context";

export default function Marketplace() {
  return (
    <>
	<AuthProvider>
      <NavBar />
      <Carousel2 />
      <Bttmcomponentmarketplace />
	</AuthProvider>
    </>
  );
}
