"use client";

import { useState, useEffect } from "react";
import * as api from "../utils";
import NavBar from "../components/nav/NavBar2";
import Carousel2 from "../components/carousel/Carousel2";
import { AuthProvider } from "../context";
import ".//Individualshoebttmcomponent.css";

export default function Individualshoepage({ searchParams }) {
  const [shoeData, setShoeData] = useState(null);

  useEffect(() => {
    const id = searchParams.shoeId;

    const controller = new AbortController();
    api.getListing(id, controller).then((data) => {
      setShoeData(data);
    });

    return () => controller.abort();
  }, [searchParams]);

  return shoeData == null ? (
    <div>Loading...</div>
  ) : (
    <>
      <AuthProvider>
        <NavBar />
        <Carousel2 />
        <div className="individualshoecontainer">
          <hr />
          <div className="grayarea">
            <img src="/backarrow.svg" />
            <h1> {shoeData.name}</h1>
            <div className="bottomarea">
              <div className="bottomleftarea">
                <div className="center">
                  {" "}
                  <div className="centerimagecontainer">
                  </div>
                </div>
              </div>
              <div className="bottomrightarea">hi</div>{" "}
            </div>
          </div>
        </div>
        <h1>Shoe ID: {shoeData.id}</h1>
        <h1>Shoe Name: {shoeData.name}</h1>
        <h1>Shoe Price: {shoeData.price}</h1>
        <h1>Shoe Description: {shoeData.description}</h1>
        <h1>Shoe Model: {shoeData.model}</h1>
        <img src={shoeData.topview} width={300} height={"auto"} alt="image"></img>
      </AuthProvider>
    </>
  );
}
