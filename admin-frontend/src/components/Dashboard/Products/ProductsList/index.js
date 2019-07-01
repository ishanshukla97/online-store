import React from "react";
import Item from "./Item";

const ProductsList = props => {
	if (props.products.length <= 1) {
		return <div>Loading...</div>;
	}
	return (
		<div className="collection col s9" style={{ marginLeft: "5%" }}>
			{props.products.map(product => {
				return (
					<Item
						key={product._id}
						item={product}
						onClick={() => props.onClick(product._id)}
					/>
				);
			})}
		</div>
	);
};
export default ProductsList;
