import React from "react";
import { connect } from "react-redux";
import * as actions from "../../services/view/actions";
import "./style.scss";

const NavBar = props => {
	const ITEMS = ["Products", "Orders", "Reviews"];
	const [state, setState] = React.useState({});
	function handleToggle(value) {
		const t_state = {};

		ITEMS.forEach(item => {
			t_state[item] = false;
		});
		t_state[value] = true;
		setState(t_state);

		props.toggleView(value);
	}
	return (
		<nav className="navigation">
			{ITEMS.map(item => {
				return (
					<a
						key={item}
						href="#!"
						onClick={() => handleToggle(item)}
						className={
							state[item]
								? "navigation__item navigation__item--selected"
								: "navigation__item"
						}
					>
						{item}
					</a>
				);
			})}
		</nav>
	);
};

export default connect(
	null,
	actions
)(NavBar);
