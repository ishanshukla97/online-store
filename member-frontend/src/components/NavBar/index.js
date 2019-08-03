import React from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../services/cart/actions";
import "./index.scss";

const NavBar = props => {
	const [expanded, setExpanded] = React.useState(false);

	const handleScroll = () => {
		setExpanded(window.pageYOffset > 200);
	};

	React.useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	return (
		<React.Fragment>
			<nav className="navigation">
				<a
					className="navigation__item"
					href="#!"
					onClick={() => props.history.push("/")}
				>
					Home
				</a>
				<a
					className="navigation__item"
					href="#!"
					onClick={() => props.history.push("/shop")}
				>
					Shop
				</a>
				<a
					className="navigation__item"
					href="#!"
					onClick={() => props.history.push("/about")}
				>
					About
				</a>

				<a
					href="#!"
					onClick={() => props.toggleCart()}
					className="right"
				>
					<span className="badge amber">
						{props.cart.items.length}
					</span>
					<i className="material-icons navigation__item">
						shopping_cart
					</i>
				</a>
			</nav>
			<nav
				className={classnames(
					{
						navigation__fixed: expanded,
						"navigation__fixed--hidden": !expanded
					},
					"navigation"
				)}
			>
				<a
					className="navigation__item"
					href="#!"
					onClick={() => props.history.push("/")}
				>
					Home
				</a>
				<a
					className="navigation__item"
					href="#!"
					onClick={() => props.history.push("/shop")}
				>
					Shop
				</a>
				<a
					className="navigation__item"
					href="#!"
					onClick={() => props.history.push("/about")}
				>
					About
				</a>

				<a
					href="#!"
					onClick={() => props.toggleCart()}
					className="right"
				>
					<span className="badge amber">
						{props.cart.items.length}
					</span>
					<i className="material-icons navigation__item">
						shopping_cart
					</i>
				</a>
			</nav>
		</React.Fragment>
	);
};

const mapStateToProps = ({ cart }) => {
	return { cart };
};

export default withRouter(
	connect(
		mapStateToProps,
		actions
	)(NavBar)
);
