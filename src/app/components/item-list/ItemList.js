import React from 'react';
import Item from '../item/Item';
import './ItemList.css';

const ItemList = props => {
	return (
		<div className='item-list'>
			<div className='item-list_Text'>
				<h1>womens</h1>
				<h1>cans</h1>
			</div>
			<div className="item-list_Images">
				{props.items.map((element, idx) => (
					<Item price={element.price} src={element.src} key={idx}/>
				))}
			</div>
		</div>
	);
}

export default ItemList;
