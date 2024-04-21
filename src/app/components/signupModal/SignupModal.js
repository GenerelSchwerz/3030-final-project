import React, { useState } from 'react';
import './SignupModal.css';

export default function SignupModal() {

    const[modal, setModal] = useState(false);

    const openModal = () => {
        setModal(!modal);
    };
    if (modal) {
        return (
            <div>
                <button onClick={openModal} className="signupbutton">
                    Sign Up
                </button>
                <div className="overlay">
                    <div className="modalContainer">
                        <div className="topModal">
                            <img src="/shoepantspng.png"/>
                            <h2 onClick={openModal}>X</h2>
                        </div>
                        <h1>Create Account</h1>
                        <div className="formContainer">
                            <form action="">
                                <div className="formStuff">
                                    <input type="text" placeHolder="First Name"/>
                                    <input type="text" placeHolder="Last Name"/>
                                </div>
                                <input type="text" placeHolder="Username"/>
                                <input type="text" placeHolder="Password"/>
                                <div className="formStuff">
                                    <input type="text" placeHolder="Email"/>
                                    <input type="text" placeHolder="Phone #"/>
                                </div>
                                <button className="formSubmit">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            // Later, will just return null when using actual login button - just testing with a tester button
            <button onClick={openModal} className="signupbutton">
                Sign Up
            </button>
        )
    }
};