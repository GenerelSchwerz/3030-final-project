import "./ChatBox.css"
import { useState } from "react";

export default function ChatBox() {

	const [data, updateDatat = useState([
		{
			text:"textttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
			inbound: true
		},
		{
			text:"textttttttttttttttttttttttttttttttttttttttttttttttttt",
			inbound: false
		},
		{
			text:"texttttttttttttttttttttttttttttttt",
			inbound: true
		},
		{
			text:"texttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt",
			inbound: false
		}
	]);

	const [input, updateInput] = useState("");

	const onInputChange = event => {
		updateInput(event.target.value);
	}

	const onSubmitSend = event => {
		console.log(data.length);
		let x = data.push(
			{
				text: input,
				inbound: false
			}
		);
		console.log(data);
		updateInput("");
	}

	return (
		<div className="chatbox_container">
			<div className="chatbox">
				<div className="chatbox_heading">
					<h3>trashford</h3>
					<input className="chatbox_exitButton" type="button" value={"x"}/>
				</div>
				<div className="chatbox_textContainer">
					{
						data.map(obj => {
							return (
								obj.inbound ? (
									<div className="chatbox_textElementIn" key={data.indexOf(obj)}>
										<p>{obj.text}</p>
									</div>
								) : (
									<div className="chatbox_textElementOut" key={data.indexOf(obj)}>
										<p>{obj.text}</p>
									</div>
								)
							);
						})
					}
				</div>
				<div className="chatbox_buttonContainer">
					<input className="chatbox_searchBar" type="text" placeholder="Message..." onChange={onInputChange} value={input}/>
					<input className="chatbox_sendButton" type="button" value={"Send"} onClick={onSubmitSend}/>
				</div>
			</div>
		</div>
	);
}