"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import * as api from "../utils"

export default function Individualshoepage({searchParams}) {


  const [shoeData, setShoeData] = useState(null);

  useEffect(() => {
    const id = searchParams.shoeId;

    const controller = new AbortController();
    api.getListing(id, controller).then((data) => {
      setShoeData(data);
    });

    return () => controller.abort();
  }, [searchParams]);

  return (

    shoeData == null ? <div>Loading...</div> :


    <div>
      <h1>Shoe ID: {shoeData.id}</h1>
      <h1>Shoe Name: {shoeData.name}</h1>
      <h1>Shoe Price: {shoeData.price}</h1>
      <h1>Shoe Description: {shoeData.description}</h1>
      <h1>Shoe Model: {shoeData.model}</h1>
      <img src={shoeData.src} width={300} height={"auto"} alt="image"></img>
    </div>
  );
}
