import gql from "graphql-tag";

const Order = {
	setStatus: async (inputs, client) => {
		try {
			const mutation = gql`
				mutation setOrderStatus($orderId: String!, $status: String!) {
					setOrderStatus(orderId: $orderId, status: $status) {
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
			const data = await client.mutate({
				mutation,
				variables: { orderId: inputs.orderId, status: inputs.status }
			});

			return data;
		} catch (err) {
			return new Error("An unexpected error occured!");
		}
	}
};

export default Order;
