import React from "react";
import "./SliderBar.css"

const SliderBar = props => {
	return (
		<div className="sliderBar">
			<div className="sliderBar_Images">
				<img src={"/next.svg"} />
				<img src={"/next.svg"}/>
				<img src={"/next.svg"}/>
			</div>
			<div className="sliderBar_Dots">
				<div className="sliderBar_dot"></div>
				<div className="sliderBar_dot"></div>
				<div className="sliderBar_dot"></div>
			</div>
		</div>
	)
}

export default SliderBar;