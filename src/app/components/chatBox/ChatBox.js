import "./ChatBox.css"

export default function ChatBox() {

	const data = [
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
	];

	return (
		<div className="chatbox_container">
			<div className="chatbox">
				<div className="chatbox_heading">
					<h3>trashford</h3>
				</div>
				<div className="chatbox_textContainer">
					{
						data.map(obj => {
							return (
								obj.inbound ? (
									<div className="chatbox_textElementIn">
										<p>{obj.text}</p>
									</div>
								) : (
									<div className="chatbox_textElementOut">
										<p>{obj.text}</p>
									</div>
								)
							);
						})
					}
				</div>
				<div className="chatbox_buttonContainer">
					<input className="chatbox_searchBar" type="text" placeholder="Message..." />
					<input className="chatbox_sendButton" type="button" value={"Send"} />
				</div>
			</div>
		</div>
	);
}