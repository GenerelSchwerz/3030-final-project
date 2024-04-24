"use client";

import NavBar from "../components/nav/NavBar2";
import AddPopup from "../components/addPopup/AddPopup";
import { useAuth } from "../context";
import UserListings from "./UserListings";


import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {

  const router = useRouter();
  const {loggedIn} = useAuth();

  useEffect(() => {
    if(!loggedIn) {
      router.push("/");
    }

  })


  return (
    <>
      <NavBar />
      <AddPopup/>
	  <UserListings/>
    </>
  );
}
