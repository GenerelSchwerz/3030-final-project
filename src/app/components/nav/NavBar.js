import "./NavBar.css";
import Link from "next/link";
import { useState, useEffect } from "react";

import { getInfo, logout } from "../utils";

export default function NavBar(props) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
	const controller = new AbortController();
	getInfo(controller).then((response) => {
		setLoggedIn(true);

	}).catch((err) => {
		setLoggedIn(false)
	});

	return () => controller.abort();
  }, []);

  const onLogout = () => {
	const controller = new AbortController();
	logout(controller).then(() => {
	  setLoggedIn(false);
	  window.location.href = "/";
	}).catch((err) => {
	  console.error(err);
	});

	return () => controller.abort();
  }

  return (
    <nav className="nav-bar">
      <div className="nav-bar_topDiv">
        <h1>cosmic commerse</h1>
        <input type="text" placeholder="Search.." />
        {
          loggedIn ? (
            <div className="nav-bar_buttonGroup">
              <button type="button" className="nav-bar_home">
                <Link href="/add-item">Add Item</Link>
              </button>
              <button type="button" className="nav-bar_support" onClick={onLogout}>
                <p>Log Out</p>
              </button>
            </div>
          ) : (
            <div className="nav-bar_buttonGroup">
              <button type="button" className="nav-bar_login">
                <Link href="/login">Login</Link>
              </button>
              <button type="button" className="nav-bar_signup">
                <Link href="/register">Sign Up</Link>
              </button>
            </div>
          )
        }
      </div>
      <div className="nav-bar_bottomDiv">
        <button type="button" className="nav-bar_womens">
          Womens
        </button>
        <button type="button" className="nav-bar_mens">
          Mens
        </button>
        <button type="button" className="nav-bar_childrens">
          Children
        </button>
        <button type="button" className="nav-bar_colors">
          Colors
        </button>
        <button type="button" className="nav-bar_price">
          Price
        </button>
      </div>
    </nav>
  );
}
