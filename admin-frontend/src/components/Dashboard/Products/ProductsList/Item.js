import React from "react";
import "./style.scss";

const Item = props => {
	return (
		<tr onClick={props.onClick} className="products-table__item">
			<td>{props.item._id}</td>
			<td>{props.item.title}</td>
			<td>{props.item.category}</td>
			<td>₹ {props.item.price}</td>
		</tr>
	);
};

export default Item;
