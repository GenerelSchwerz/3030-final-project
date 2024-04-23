"use client";

import NavBar from "../components/nav/NavBar2";
import AddPopup from "../components/addPopup/AddPopup";
import { AuthProvider } from "../context";

export default function Home() {
  return (
    <>
	<AuthProvider>
      <NavBar auth={true} />
      <AddPopup />
	</AuthProvider>
    </>
  );
}
