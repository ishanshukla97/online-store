import React from "react";
import "./index.css";

const Home = props => {
	return (
		<div className="banner-container">
			<img src="banner-1.jpg" className="banner-img" />
			<h3 className="banner-text-1">
				A Thoroughly <b>Modern</b> Woman{" "}
			</h3>
			<h3 className="banner-text-2">SHOP NOW</h3>
		</div>
	);
};

export default Home;
