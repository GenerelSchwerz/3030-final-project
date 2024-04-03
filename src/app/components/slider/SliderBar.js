import React from "react";
import "./SliderBar.css"

const SliderBar = props => {
	return (
		<div className="sliderBar">
			<div className="sliderBar_Images">
				<img src={"/slider_beigeDunks.png"} />
				<img src={"/slider_grayDunks.png"}/>
				<img src={"/slider_lilacDunks.png"}/>
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