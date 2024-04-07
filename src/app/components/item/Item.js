import './Item.css'

export default function Item(props) {
	return (
		<div className='item'>
			<img src={props.src}/>
			<div className='item_Text'>
				<h3>{props.price}</h3>
				<h3>+</h3>
			</div>
		</div>
	);
}
