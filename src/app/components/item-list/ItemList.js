import React from 'react';
import Item from '../item/Item';
import './ItemList.css';

export default function ItemList(props) {
	return (
		<div className='item-list'>
			<div className='item-list_Text'>
				<h1>Women's</h1>
			</div>
			<div className="item-list_Images">
				{props.items?.map((element, idx) => {
					console.log(element, idx);
					return (<Item 
						name = {element.name}
						price={element.price.toFixed(2)} 
						src={element.src} 
						key={idx} 
						auth={props.auth}/>)
					})}
			</div>
		</div>
	);
}
