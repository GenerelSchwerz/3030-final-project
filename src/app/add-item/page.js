"use client";

import NavBar from "../components/nav/NavBar2";
import AddPopup from "../components/addPopup/AddPopup";
import LoginModal from "../components/loginModal/LoginModal";
import SignupModal from "../components/signupModal/SignupModal";

export default function Home() {
  return (
    <>
      <NavBar auth={true} />
      <AddPopup />
    </>
  );
}
