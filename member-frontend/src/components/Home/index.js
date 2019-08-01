import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./index.css";

const Home = props => {
	return (
		<ReactCSSTransitionGroup
			transitionName="example"
			transitionEnterTimeout={500}
			transitionLeaveTimeout={300}
		>
			<div className="banner-container">
				<img src="banner-1.jpg" className="banner-img" />
				<h3 className="banner-text-1">
					A Thoroughly <b>Modern</b> Woman{" "}
				</h3>
				<h3 className="banner-text-2">SHOP NOW</h3>
			</div>
		</ReactCSSTransitionGroup>
	);
};

export default Home;
