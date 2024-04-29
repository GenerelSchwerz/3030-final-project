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

  const refresh = () => {

  }

  useEffect(() => {
    if (!loggedIn) {
      router.push("/");
    }
  });

  useEffect(() => {
    if (user == null) {
      return;
    }

    const controller = new AbortController();

    api
      .fetchUserListings(user.id, controller)
      .then((data) => {
        console.log(data);
        setShoes(data);
      })
      .catch((err) => {
        console.log(err);
      });

      return () => controller.abort()
  }, [user]);

  const handleAddItem = shoe => {
    api.getListing(shoe.id)
    .then(data => setShoes(prev => [...prev, data]))
    .catch(err => console.log(err));
  }

  const handleEdit = (shoe) => {
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
      <AddPopup onSubmit={handleAddItem}/>
      <EditPopup shoe={editShoe} updateShoe={updateEditShoe} display={editShoe != null} onSubmit = {() => setEditShoe(null)} onExit={onExit} />
      <UserListings handleEdit={handleEdit} shoes={shoes} setShoes={setShoes} />
    </>
  );
}
