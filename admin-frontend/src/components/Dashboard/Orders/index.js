import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Item from "./Item";
import { withApollo } from "react-apollo";
import Order from "../../../graphqlFetch/mutation/order";
import { Table } from "react-bootstrap";
import "./style.scss";

const GET_ORDERS = gql`
	{
		orders {
			_id
			total
			status
			creator {
				contact
				address
				name
			}
			products {
				_id
				name
				quantity
			}
			createdAt
			confirmedAt
			deliveredAt
		}
	}
`;

const Orders = props => (
	<Query query={GET_ORDERS}>
		{({ loading, error, data }) => {
			if (loading) return "Loading...";
			if (error) return `Error! ${error.message}`;

			return (
				<React.Fragment>
					<h2 className="heading-secondary">Orders</h2>
					<Table className="orders-table" responsive="sm">
						<thead>
							<tr>
								<th>Name</th>
								<th>Phone</th>
								<th>Address</th>
								<th>Total</th>
								<th>Details</th>
								<th>Status</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{data.orders.reverse().map(order => (
								<Item
									key={order._id}
									{...order}
									setStatus={val =>
										Order.setStatus(val, props.client)
									}
								/>
							))}
						</tbody>
					</Table>
				</React.Fragment>
			);
		}}
	</Query>
);

export default withApollo(Orders);
