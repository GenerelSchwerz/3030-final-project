import React, { useState, useEffect } from 'react';
import './LoginModal.css';
import * as api from "../../utils"
import { useAuth } from '@/app/context';

export default function LoginModal(props) {

	const[username, setUsername] = useState("");
	const[password, setPassword] = useState("");
	const[sendRequest, setSendRequest] = useState(false);
	const context = useAuth();

	const onChangeUsername = event => {
		setUsername(event.target.value);
	}

	const onChangePassword = event => {
		setPassword(event.target.value);
	}

	const onSubmitForm = event => {
		event.preventDefault();
		console.log(event.target);
		setSendRequest(true);
	}

	useEffect(() => {
		if(!sendRequest) {
			return;
		}

		const controller = new AbortController();
		api.login(username, password, controller).then((data) => {
      		console.log(data);
			props.submitButtonHandler();
			setSendRequest(false);
			console.log(data)
			context.setLoggedIn(true, data.token);
			context.setUser(data);
    	}).catch(err => {
			if (err.name === "AbortError") {
				console.log("Request Aborted");
				return;
			}
			console.log(err);
			setSendRequest(false);
			context.setLoggedIn(false);
			context.setUser(null)
		});

		return () => {
			controller.abort();
	};
	}, [sendRequest, username, password, context, props]);

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
                            <input type="text" placeholder="Username.." value={username} onChange={onChangeUsername}/> <br/>
                            <input type="text" placeholder="Password.." value={password} onChange={onChangePassword}/> <br/>
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
