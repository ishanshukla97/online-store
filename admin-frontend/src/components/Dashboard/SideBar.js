import React from "react";
import { connect } from "react-redux";
import * as actions from "../../services/view/actions";

const SideBar = props => {
	const ITEMS = ["Products", "Orders", "Reviews"];
	function handleToggle(value) {
		const state = {};
		ITEMS.forEach(item => {
			state[item] = false;
		});
		state[value] = true;
		props.toggleView(value);
	}
	return (
		<div className="col s2" style={{ padding: 0, margin: 0 }}>
			<div className="collection">
				{ITEMS.map(item => {
					return (
						<a
							key={item}
							href="#!"
							onClick={() => handleToggle(item)}
							className="collection-item"
						>
							{item}
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default connect(
	null,
	actions
)(SideBar);
