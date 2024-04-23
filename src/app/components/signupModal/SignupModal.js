import React, { useState } from 'react';
import './SignupModal.css';
import * as api from "../../utils"

export default function SignupModal(props) {
    if (props.show) {
        return (
            <div className="signupModalOverlay">
                <div className="modalContainer">
                    <div className="topModal">
                        <img src="/shoepantspng.png"/>
                        <h2 onClick={props.exitButtonHandler}>X</h2>
                    </div>
                    <h1>Create Account</h1>
                    <div className="formContainer">
                        <form action="">
                            <input type="text" placeholder="Username"/>
                            <input type="text" placeholder="Password"/>
                            <div className="formStuff">
                                <input type="text" placeholder="Email"/>
                                <input type="text" placeholder="Phone #"/>
                            </div>
                            <button className="formSubmit" onClick={props.submitButtonHandler}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
};
