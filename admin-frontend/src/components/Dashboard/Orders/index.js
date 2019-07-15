import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Item from "./Item";
import { withApollo } from "react-apollo";
import Order from "../../../graphqlFetch/mutation/order";

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
				<div className="col s10">
					<ul className="expandable">
						{data.orders.map(order => (
							<Item
								key={order._id}
								{...order}
								setStatus={val =>
									Order.setStatus(val, props.client)
								}
							/>
						))}
					</ul>
				</div>
			);
		}}
	</Query>
);

export default withApollo(Orders);
