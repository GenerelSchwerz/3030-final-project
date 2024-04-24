import React, { useState, useEffect } from 'react';
import './SignupModal.css';
import * as api from "../../utils"
import { useAuth } from '@/app/context';

export default function SignupModal(props) {

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [sendRequest, setSendRequest] = useState(false);
	const context = useAuth();

	const onChangeUser = event => {
		setUsername(event.target.value);
	}

	const onChangePassword = event => {
		setPassword(event.target.value);
	}

	const onChangeEmail = event => {
		setEmail(event.target.value);
	}

	const onChangePhone = event => {
		setPhone(event.target.value);
	}

	const onSubmit = event => {
		event.preventDefault();
		console.log(username + password + email + phone);
		setSendRequest(true);
	}

	useEffect(() => {
		if(!sendRequest) {
			return;
		}

		const controller = new AbortController();
		api.register({username, email, password, phone}, controller).then((data) => {
      		console.log(data);
			props.submitButtonHandler();
			setSendRequest(false);
			context.setLoggedIn(true, data.token);
    	}).catch(err => {
			console.log(err);
			setSendRequest(false);
		});

		return () => {
			controller.abort();
	};
	}, [sendRequest, username, email, password, phone, context, props]);

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
                        <form onSubmit={onSubmit}>
                            <input type="text" value={username} onChange={onChangeUser} placeholder="Username"/>
                            <input type="text" value={password} onChange={onChangePassword} placeholder="Password"/>
                            <div className="formStuff">
                                <input type="text" value={email} onChange={onChangeEmail} placeholder="Email"/>
                                <input type="text" value={phone} onChange={onChangePhone} placeholder="Phone #"/>
                            </div>
                            <button type="submit" className="formSubmit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    } else {
        return (<></>);
    }
};
