"use client";

import NavBar2 from "./components/nav/NavBar2";
import Carousel2 from "./components/carousel/Carousel2";
import Homepagebttmcomponent from "./components/homepage/Homepagebttmcomponent";
import ChatBox from "./components/chatBox/ChatBox";

export default function Home() {
  return (
    <>
      <NavBar2 classname="navbar" showButtons={false} />
      <ChatBox />
      <Carousel2 classname="carousel" />
      <Homepagebttmcomponent />
    </>
  );
}
