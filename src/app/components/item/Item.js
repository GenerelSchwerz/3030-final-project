import './Item.css'

export default function Item(props) {
	return (
		<div className='item'>
			<div className='item_Image'>
				<img src={props.src}/>
			</div>
			<div className='item_Text'>
				<h3>{props.price}</h3>
				<h3>+</h3>
			</div>
		</div>
	);
}
