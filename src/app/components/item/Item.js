import './Item.css'

export default function Item(props) {
	return (
		<div className='item'>
			<img src={props.src}/>
			<div className='item_Text'>
				<h3>{props.price}</h3>
				{(() => {
					switch (props.auth) {
							case true: return (
								<h3>Edit Item</h3>
							);
							case false: return (
								<h3>Add to cart</h3>
							);
							default: return "Undefined";
						}
				})()}
			</div>
		</div>
	);
}
