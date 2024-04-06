import React from 'react';
import Item from '../item/Item';
import './ItemList.css';

const ItemList = props => {
	return (
		<div className="item-list">
			<ul>
				{props.items.map((element, idx) => (
					<Item price={element.price} src={element.src} key={idx}/>
				))}
			</ul>
		</div>
	);
}

export default ItemList;
