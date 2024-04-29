import React, { useState, useEffect } from 'react';
import './LoginModal.css';
import * as api from "../../utils"
import { useAuth } from '@/app/context';

export default function LoginModal(props) {

	const[username, setUsername] = useState("");
	const[password, setPassword] = useState("");
	const[sendRequest, setSendRequest] = useState(false);
	const context = useAuth();

	const onSubmitForm = event => {
		event.preventDefault();
		api.login(username, password).then((data) => {
			context.setLoggedIn(true, data.token);
			context.setUser(data);
			props.submitButtonHandler();
    	}).catch(err => {
			context.setLoggedIn(false);
			context.setUser(null)
			alert(err);
			console.log(err);
		});
	}

    if (props.show) {
        return (
                <div className="loginModalOverlay">
                    <div className="loginModal">
                        <div className="leftModal">
                            <img src="/shoesNStuff.png"/>
                            <h2 onClick={props.exitButtonHandler}>X</h2>
                        </div>
                        <h1>Login</h1>
                        <form onSubmit={onSubmitForm}>
                            <input type="text" placeholder="Username.." value={username} onChange={(e) => setUsername(e.target.value)}/> <br/>
                            <input type="text" placeholder="Password.." value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>
                            <button type="submit" className="submitButton">Submit</button>
                        </form>
                        <p onClick={props.createAccountHandler}>Create An Account?</p>
                    </div>
                </div>
        );
    } else {
		return (<></>);
    }
};
