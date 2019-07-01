import React from "react";

const Item = props => {
	return (
		<a href="#!" className="collection-item" onClick={props.onClick}>
			{props.item.title}
		</a>
	);
};

export default Item;
