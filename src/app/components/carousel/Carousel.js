import React, { useEffect } from "react";
import { useState } from "react";
import "./Carousel.css"

export default function Carousel(props) {

	//Notes
	//There are three divs (dots on the bottom) that are used to change the carousel position, with IDs 0, 1, 2
	//When a user clicks one of the divs, the stateTarget moves to the divs ID * 100
	//Via useEffect, carouselPosition will update 1 number at a time till it reaches stateTarget

	const [carouselPosition, updateCarouselPosition] = useState(0);
	const [stateTarget, updateStateTarget] = useState(0);

	const data = ["/slider_beigeDunks.png", "/slider_grayDunks.png", "/slider_lilacDunks.png"];

	const divOnClick = event => {

		let num = Number(event.target.id);

		if(num == carouselPosition) {
			return;
		}

		num = (num == data.length) ? 0:num * 100;

		updateStateTarget(num);
	}

	useEffect(() => {
		//Called whenever the componenet rerenders

		if(carouselPosition == stateTarget)
		{
			return;
		}

		var timer = setTimeout(() => {
			updateCarouselPosition(prevState => prevState + (stateTarget > carouselPosition ? 1:-1));
		}, 1.2);

		return () => {
			//Also called whenever the component rerenders, cannot clear the timeout unless the "animation" is done
			if(carouselPosition != stateTarget)
			{
				return;
			}

			clearTimeout(timer);
		}
	 },[carouselPosition, stateTarget])

	return (
	<div className="carousel">
		<div className="carousel_Images">
		{
			data.map((element, idx) => {
				return (
					<div key={idx} className="carousel_Item" style={{transform: `translate(-${carouselPosition}%)`}}>
						<img src={element} key={idx}/>
						<img src={element} key={idx + 100}/>
						<img src={element} key={idx + 1000}/>
					</div>
				);
			})
		}
		</div>
		<div className="carousel_Dots">
			<div className="carousel_dot" id="0" onClick={divOnClick}></div>
			<div className="carousel_dot" id="1" onClick={divOnClick}></div>
			<div className="carousel_dot" id="2" onClick={divOnClick}></div>
		</div>
	</div>
	);
}
