import React, { useState } from 'react';
import './LoginModal.css';
export default function LoginModal(props) {

    // // Use state for open and close modal status
    // const[modal, setModal] = useState(false);

    // // Login Button onClick Handler
    // const openModal = () => {
    //     setModal(!modal);
    // };

    if (props.show) {
		console.log(props);
        return (
                <div className="loginModalOverlay">
                    <div className="loginModal">
                        <div className="leftModal">
                            <img src="/shoesNStuff.png"/>
                            <h2 onClick={props.exitButtonHandler}>X</h2>
                        </div>
                        <h1>Login</h1>
                        <form>
                            <input type="text" placeholder="Username.."/> <br/>
                            <input type="text" placeholder="Password.."/> <br/>
                            <button className="submitButton" onClick={props.submitButtonHandler}>Submit</button>
                        </form>
                        <p onClick={props.createAccountHandler}>Create An Account?</p>
                    </div>
                </div>
        );
    } else {
		return (<></>);
    }
};
