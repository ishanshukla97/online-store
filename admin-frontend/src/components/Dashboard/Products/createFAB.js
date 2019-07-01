import React from "react";

export default function(props) {
	return (
		<div className="fixed-action-btn">
			<a
				className="btn-floating btn-large red"
				href="#!"
				onClick={props.onClick}
			>
				<i className="large material-icons">add</i>
			</a>
		</div>
	);
}
