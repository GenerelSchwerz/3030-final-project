import "./ConvoList.css"

export default function ConvoList() {
	const data = [{
			name: "daniel",
			lastMsg: "hey",
			date: "9/9/9"
		},
		{
			name: "dan",
			lastMsg: "hi",
			date: "9/9/10"
		},
		{
			name: "daniel",
			lastMsg: "hey",
			date: "9/9/9"
		},
		{
			name: "daniel",
			lastMsg: "hey",
			date: "9/9/9"
		},
		{
			name: "daniel",
			lastMsg: "hey",
			date: "9/9/9"
		},
		{
			name: "daniel",
			lastMsg: "hey",
			date: "9/9/9"
		},
		{
			name: "daniel",
			lastMsg: "hey",
			date: "9/9/9"
		}
	]
	return (
		<div className="convolist_container">
			<div className="convolist">
				<div className="convolist_heading">
					<h3>convos</h3>
					<input className="convolist_exitButton" type="button" value={"X"}/>
				</div>
				<div className="convolist_convosContainer">
					{
						data.map(obj => {
							return (
								<div className="convolist_convoItem" key={data.indexOf(obj)}>
									<div className="convolist_itemTop">
										<h3>{obj.name}</h3>
										<p>{obj.lastMsg}</p>
									</div>
									<p>{obj.date}</p>
								</div>
							);
						})
					}
				</div>
			</div>
		</div>
	);
}
