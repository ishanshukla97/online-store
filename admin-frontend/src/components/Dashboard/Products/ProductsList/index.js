import React from "react";
import Item from "./Item";
import { Table } from "react-bootstrap";
import "./style.scss";

const ProductsList = props => {
	if (props.products.length < 1) {
		return <div>Loading...</div>;
	}
	return (
		<Table className="products-table" responsive="sm">
			<thead className="products-table__head">
				<tr>
					<th>ID</th>
					<th>Name</th>
					<th>Category</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{props.products.map(product => {
					return (
						<Item
							key={product._id}
							item={product}
							onClick={() => props.onClick(product._id)}
						/>
					);
				})}
			</tbody>
		</Table>
	);
};
export default ProductsList;
