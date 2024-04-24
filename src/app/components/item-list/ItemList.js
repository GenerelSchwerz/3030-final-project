import React from 'react';
import Item from '../item/Item';
import './ItemList.css';
import { useAuth } from '@/app/context';

export default function ItemList(props) {
	const {loggedIn} = useAuth();

	return (
		<div className='item-list'>
			<div className='item-list_Text'>
				<h1>Women's</h1>
			</div>
			<div className="item-list_Images">
				{props.items.map((element, idx) => (
					<Item 
						name = {element.name}
						price={element.price} 
						src={element.src} 
						key={idx} 
						auth={loggedIn}/>
				))}
			</div>
		</div>
	);
}
