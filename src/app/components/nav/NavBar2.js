
import "./NavBar2.css";
import LoginModal from "../loginModal/LoginModal";
import SignupModal from "../signupModal/SignupModal";
import { useAuth } from "../../context";
import { useState, useEffect } from "react";
import Link from "next/link";
import * as api from "../../utils"

import { useRouter } from "next/navigation";

export default function NavBar() {
	const router = useRouter();
	const authContext = useAuth();
	const [showLogin, updateShowLogin] = useState(false);
	const [showSignup, updateShowSignup] = useState(false);
	const [sendLogout, updateSendLogout] = useState(false);

	const onClickLogin = event => {
		updateShowLogin(!showLogin)
	}

	const onClickSignup = event => {
		updateShowSignup(!showSignup);
	}

	const onLoginSubmitHandler = event => {
		updateShowLogin(false);
	}

	const onSignupSubmitHandler = event => {
		updateShowSignup(false);
	}

	const onCreateAccountHandler = event => {
		updateShowLogin(false);
		updateShowSignup(true);
	}

	const onExitHandler = event => {
		updateShowLogin(false);
		updateShowSignup(false);
	}

	const onSignOutHandler = event => {
		updateSendLogout(true);
	}

	const onSearchHandler = event => {
		if(event.key !== "Enter") return
		console.log(event.target.value);
		router.push(`/search?q=${event.target.value}`)
		// api.searchListings(event.target.value).then(data => {
		// 	console.log(data);
		// }).catch(console.error);
	}

	useEffect(() => {
		if(!sendLogout) {
			return;
		}

		const controller = new AbortController();
		api.logout(controller).then(data => {
			console.log(data);
			updateSendLogout(false);
			authContext.setLoggedIn(false);
		}).catch(err => {
			console.log(err);
			updateSendLogout(false);
			console.log(authContext);
		});

		return () => {
			controller.abort();
	};
	}, [sendLogout, authContext]);

  return (
	<>
    <nav className="navigationBar">
      <div className="upperNav">
        <Link href="/" className="link"><h1 className="websiteName"> Cosmic Commerce </h1></Link>
        <div className="searchbarcontainer">
          <img
            className="searchicon"
            src="/magnifyingglass.svg"
            alt="search"
          />
          <input className="searchBar" type="text" placeholder="Search..." onKeyDown={onSearchHandler}/>
        </div>
        {authContext.loggedIn === false ? (
          <div className="logincreateAccountButtons">
            <button className="login" onClick={onClickLogin}> Login </button>
            <button className="createAccount" onClick={onClickSignup}>Sign up</button>
          </div>
        ) : (
          <div className="loggedInButtons">

      		<Link href="/user" className="link">
			<button className="icon">
				<img src="/userIcon.png"/>
			</button>
      		</Link>


    	<Link href="/cart" className="link">
			<button className="cart">
				<img src="/cartIcon.png"/>
			</button>
    	</Link>
			<button className="icon">
				<img src="/messagingIcon.webp"/>
			</button>

			<button onClick={onSignOutHandler}>Sign Out</button>

		  </div>
        )}
      </div>
      <div className="lowernav">
        <h2 className="womens">Women's</h2>
        <h2 className="mens">Men's</h2>
        <h2 className="childrens">Children's</h2>
        <h2 className="color">Color</h2>
        <h2 className="price">Price</h2>
      </div>
    </nav>
	<LoginModal show={showLogin} submitButtonHandler={onLoginSubmitHandler} exitButtonHandler={onExitHandler} createAccountHandler={onCreateAccountHandler}/>
	<SignupModal show={showSignup} submitButtonHandler={onSignupSubmitHandler} exitButtonHandler={onExitHandler}/>
	</>
  );
}
