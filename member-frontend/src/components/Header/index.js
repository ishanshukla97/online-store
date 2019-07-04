import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function(props) {
	const renderContent = () => {
		return (
			<div>
				<li>
					<a href="#!">Login</a>
				</li>
				<li>
					<a href="#!">
						<i className="material-icons">shopping_cart</i>
					</a>
				</li>
			</div>
		);
	};

	return (
		<div className="parallax">
			<nav>
				<div className="nav-wrapper">
					<Link to="/" className="left brand-logo">
						Store
					</Link>
					<ul className="right">{renderContent()}</ul>
				</div>
			</nav>
		</div>
	);
}
