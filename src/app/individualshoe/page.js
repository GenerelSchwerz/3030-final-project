"use client";
import { useState, useEffect } from "react";
import * as api from "../utils";
import NavBar from "../components/nav/NavBar2";
import Carousel2 from "../components/carousel/Carousel2";
import { AuthProvider } from "../context";
import "./Individualshoebttmcomponent.css";
import Link from "next/link";
import { Heart } from "lucide-react";

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
      <NavBar />
      <div className="individualshoecontainer">
        <hr />
        <div className="grayarea">
          <Link href="/marketplace">
            <img className="backarrow" src="/backarrow.svg" />
          </Link>
          <h1>{shoeData.name}</h1>
          <div className="bottomarea">
            <div className="bottomleftarea">
              <div className="center">
                <div className="name">
                  <h1>{shoeData.name}</h1>
                </div>
                {shoeData.sideview && (
                  <img src={shoeData.sideview} height={"65%"} alt="Side View" onError={(e) => (e.target.style.display = "none")} />
                )}
              </div>
              <div className="topleft">
                {shoeData.topview && (
                  <img src={shoeData.topview} height={"95%"} alt="Top View" onError={(e) => (e.target.style.display = "none")} />
                )}
              </div>
              <div className="bottom">
                <h1> Skate</h1>
                {shoeData.frontview && (
                  <img src={shoeData.frontview} height={"100%"} alt="Front View" onError={(e) => (e.target.style.display = "none")} />
                )}
                <h1> Shoes</h1>
              </div>
            </div>
            <div className="bottomrightarea">
              <div className="left">
                <h1> Size:</h1>
                <div className="size">
                  <h1>{shoeData.size}</h1>
                </div>
              </div>
              <div className="right">
                <h1> ${shoeData.price}</h1>
                <button className="addtocart">
                  <p> Add To Cart</p>
                </button>
                <button className="favorite">
                  <p> Favorites</p>
                  <Heart className="heart" />
                </button>
                <div className="description">
                  <p>{shoeData.description}</p>
                </div>
                <button className="contactseller">
                  <p> Contact Seller</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <h1>Shoe ID: {shoeData.id}</h1>
      <h1>Shoe Name: {shoeData.name}</h1>
      <h1>Shoe Price: {shoeData.price}</h1>
      <h1>Shoe Description: {shoeData.description}</h1>
      <h1>Shoe Model: {shoeData.model}</h1>
      {shoeData.frontview && <img src={shoeData.frontview} alt="Front View" onError={(e) => (e.target.style.display = "none")} />} */}
    </>
  );
}
