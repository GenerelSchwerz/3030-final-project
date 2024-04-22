"use client";

import NavBar2 from "./components/nav/NavBar2";
import Carousel2 from "./components/carousel/Carousel2";
import Homepagebttmcomponent from "./components/homepage/Homepagebttmcomponent";
import { AuthProvider } from "./context";

export default function Home() {
  return (
    <>
	<AuthProvider>
	  <NavBar2 classname="navbar" showButtons={true} />
      <Carousel2 />
      <Homepagebttmcomponent />
	</AuthProvider>
    </>
  );
}
