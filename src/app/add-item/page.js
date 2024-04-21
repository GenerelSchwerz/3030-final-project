"use client";

import NavBar from "../components/nav/NavBar";
import AddPopup from "../components/addPopup/AddPopup";
import Carousel from "../components/carousel/Carousel";

export default function Home() {

  return (
    <>
      <NavBar auth={true} />
      <AddPopup />
    </>
  );
}
