"use client";

import NavBar from "../components/nav/NavBar2";
import AddPopup from "../components/addPopup/AddPopup";
import { useAuth } from "../context";
import UserListings from "./UserListings";
import EditPopup from "../components/editPopup/EditPopup"


import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const router = useRouter();
  const [editShoe, setEditShoe] = useState(null);
  const {loggedIn} = useAuth();

  useEffect(() => {
    if(!loggedIn) {
      router.push("/");
    }

  })

  const handleEdit = shoe => {
	console.log(shoe);
	setEditShoe(shoe);
  }

  const onExit = e => {
	setEditShoe(null);
  }

  return (
    <>
      <NavBar />
      <AddPopup/>
	  <EditPopup propShoe={editShoe} show={editShoe != null ? true:false} onExit={onExit}/>
	  <UserListings handleEdit={handleEdit}/>
    </>
  );
}
