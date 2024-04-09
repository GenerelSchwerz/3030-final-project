"use client";

import NavBar from "../components/nav/NavBar";

import { login } from "../components/utils";
import { useState, useEffect } from "react";

// this probably isn't correct.
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    login(username, password)
      .then((response) => {
        console.log(response);

		// save token to local storage
		localStorage.setItem("token", response.token);

		// redirect back to home (reactjs)
		window.location.href = "/";

      })
      .catch((err) => {
        console.error(err);
		
      }).finally(() => {
		setUsername("");
		setPassword("");
	  });
  };

  return (
    <>
      <NavBar auth={false} />
      <h1>Login Page</h1>

      <form>
        <label>Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  );
}
