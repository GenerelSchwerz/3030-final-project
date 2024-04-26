"use client";

import NavBar from "../components/nav/NavBar2";
import AddPopup from "../components/addPopup/AddPopup";
import { useAuth } from "../context";
import UserListings from "./UserListings";
import EditPopup from "../components/editPopup/EditPopup";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import * as api from "../utils";

export default function Home() {
  const router = useRouter();

  const [shoes, setShoes] = useState(null);
  const [editShoe, setEditShoe] = useState(null);
  const { loggedIn, user } = useAuth();

  useEffect(() => {
    if (!loggedIn) {
      router.push("/");
    }
  });

  useEffect(() => {
    if (shoes != null && user != null) {
      return;
    }

    const controller = new AbortController();

    if (user != null && shoes == null) {
      api
        .fetchUserListings(user.id, controller)
        .then((data) => {
          console.log(data);
          setShoes(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [shoes, user]);

  const handleEdit = (shoe) => {
    console.log("HI", shoe);
    setEditShoe(shoe);
  };

  const onExit = (e) => {
    setEditShoe(null);
  };

  const updateEditShoe = (shoe) => {
    const foundShoe = shoes.find((s) => s.id === shoe.id);
    if (!foundShoe) {
      return;
    }

    const updatedShoes = shoes.map((s) => {
      if (s.id === shoe.id) {
        return { ...s, ...shoe };
      }
      return s;
    });

    setShoes(updatedShoes);
  };

  return (
    <>
      <NavBar />
      <AddPopup />
      <EditPopup shoe={editShoe} updateShoe={updateEditShoe} display={editShoe != null} onSubmit = {() => setEditShoe(null)} onExit={onExit} />
      <UserListings handleEdit={handleEdit} shoes={shoes} setShoes={setShoes} />
    </>
  );
}
