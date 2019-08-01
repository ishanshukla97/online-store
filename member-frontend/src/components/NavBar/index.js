import React from "react";
import classnames from "classnames";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../services/cart/actions";
import "./index.css";
import M from "materialize-css";

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
			<nav
				className={classnames(
					{ navbar: !expanded },
					{ "navbar--expanded": expanded }
				)}
			>
				<div className="nav-wrapper">
					<ul className="left">
						<li>
							<a
								className="navbar-item"
								href="#!"
								onClick={() => props.history.push("/")}
							>
								Home
							</a>
						</li>
						<li>
							<a
								className="navbar-item"
								href="#!"
								onClick={() => props.history.push("/shop")}
							>
								Shop
							</a>
						</li>
						<li>
							<a
								className="navbar-item"
								href="#!"
								onClick={() => props.history.push("/about")}
							>
								About
							</a>
						</li>
					</ul>
					<a
						href="#!"
						onClick={() => props.toggleCart()}
						className="right"
					>
						<span className="badge amber">
							{props.cart.items.length}
						</span>
						<i className="material-icons navbar-item">
							shopping_cart
						</i>
					</a>
				</div>
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
