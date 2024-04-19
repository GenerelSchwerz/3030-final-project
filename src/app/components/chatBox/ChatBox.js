import "./ChatBox.css"
import { useState } from "react";

export default function ChatBox() {

	const [data, updateData] = useState([
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
		if(input.length == 0) {
			return;
		}
		data.push({
			text: input,
			inbound: false
		});

		updateData(data);
		updateInput("");
	}

	return (
		<div className="chatbox_container">
			<div className="chatbox">
				<div className="chatbox_heading">
					<input className="chatbox_exitButton" type="button" value={"<"}/>
					<h3>trashford</h3>
					<input className="chatbox_exitButton" type="button" value={"X"}/>
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
