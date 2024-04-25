"use client";

import NavBar from "../components/nav/NavBar2";
import Checkout from "./Checkout";
import { useAuth } from "../context";


import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();
  const {loggedIn, user} = useAuth();

  useEffect(() => {
    if(!loggedIn) {
      console.log('NOT LOGGED IN', user)
      router.push("/");
    }

  })


  return (
    <>
      <NavBar />
	  <Checkout/>
    </>
  );
}
