import React, { useState } from 'react';
import './LoginModal.css';
export default function LoginModal() {

    // Use state for open and close modal status
    const[modal, setModal] = useState(false);

    // Login Button onClick Handler
    const openModal = () => {
        setModal(!modal);
    };

    if (modal) {
        return (
            <div>
                <button onClick={openModal} className="loginbutton">
                    Login
                </button>
                <div className="overlay">
                    <div className="modalContainer">
                        <div className="leftModal">
                            <img src="/shoesNStuff.png"/>
                            <p>X</p>
                        </div>
                        <h2>Login</h2>
                        <form>
                            <input type="text" value="Username"/> <br/>
                            <input type="text" value="Password"/> <br/>
                            <button>Submit</button>
                        </form>
                        <p> Create An Account</p>
                    </div>
                </div>
            </div>
        );
    } else {

    } return (
        // Later, will just return null when using actual login button - just testing with a tester button
        <button onClick={openModal} className="loginbutton">
            Login
        </button>
    );
};