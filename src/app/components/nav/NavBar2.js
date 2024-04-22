import LoginModal from "../loginModal/LoginModal";
import SignupModal from "../signupModal/SignupModal";
import "./NavBar2.css";
import { useAuth } from "@/app/context";
import { useState } from "react";

export default function NavBar() {

	const authContext = useAuth();
	const [showLogin, updateShowLogin] = useState(false);
	const [showSignup, updateShowSignup] = useState(false)

	const onClickLogin = event => {
		updateShowLogin(!showLogin)
	}

	const onClickSignup = event => {
		updateShowSignup(!showSignup);
	}

	const onLoginSubmitHandler = event => {
		event.preventDefault();

		//process stuff

		updateShowLogin(false);
	}

	const onSignupSubmitHandler = event => {
		event.preventDefault();

		//process stuff

		updateShowSignup(false);
		updateShowLogin(true);
	}

	const onCreateAccountHandler = event => {
		updateShowLogin(false);
		updateShowSignup(true);
	}

	const onExitHandler = event => {
		updateShowLogin(false);
		updateShowSignup(false);
	}

  return (
	<>
    <nav className="navigationBar">
      <div className="upperNav">
        <h1 className="websiteName"> Cosmic Commerce </h1>
        <div className="searchbarcontainer">
          <img
            className="searchicon"
            src="/magnifyingglass.svg"
            alt="search"
          />
          <input className="searchBar" type="text" placeholder="Search..." />
        </div>
        {authContext.loggedIn ? (
          <div className="logincreateAccountButtons">
            <button className="login" onClick={onClickLogin}> Login </button>
            <button className="createAccount" onClick={onClickSignup}>Sign up</button>
          </div>
        ) : (
          <div className="hidden"> </div>
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
