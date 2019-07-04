import React from "react";
import "./index.css";
import { Field, reduxForm } from "redux-form";

const Filter = props => {
	const categories = [
		"Computers",
		"Books",
		"Fashion",
		"Sports",
		"Music",
		"Food"
	];
	const renderCategory = () => {
		return categories.map(item => {
			return (
				<a href="#!" key={item} className="collection-item filter-btn">
					{item}
				</a>
			);
		});
	};
	return (
		<div className="grey lighten-2" style={{ padding: 0 }}>
			<h5>FILTER</h5>
			<div className="collection">{renderCategory()}</div>
		</div>
	);
};

export default Filter;
