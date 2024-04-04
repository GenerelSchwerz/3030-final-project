import React from "react";
import { useState } from "react";
import "./Carousel.css"

const carousel = props => {

	const [carouselPosition, updateCarouselPosition] = useState(-1);

	const data = ["/slider_beigeDunks.png", "/slider_grayDunks.png", "/slider_lilacDunks.png"];

	return (
	<div className="carousel">
		<div className="carousel_Images"></div>
		{
			data.map(element => {
			<div className="carousel_Item">
				<img src={element} style={transform:'translate({-$(carouselPosition * 100)%'}/>
			</div>
			});
		}
		</div>
		<div className="carousel_Dots">
			<div className="carousel_dot"></div>
			<div className="carousel_dot"></div>
			<div className="carousel_dot"></div>
		</div>
	</div>
	);



		<div className="carousel">
			<div className="carousel_Images">
				<div className="carousel_Item">
					<img src={"/slider_beigeDunks.png"}/>
				</div>

				<div className="carousel_Item">
					<img src={"/slider_grayDunks.png"}/>
				</div>

				<div className="carousel_Item">
					<img src={"/slider_lilacDunks.png"}/>
				</div>
			</div>
			<div className="carousel_Dots">
				<div className="carousel_dot"></div>
				<div className="carousel_dot"></div>
				<div className="carousel_dot"></div>
			</div>
		</div>
	)
}

export default carousel;