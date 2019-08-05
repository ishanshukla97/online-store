import gql from "graphql-tag";

export const createGuestOrder = async (inputs, client) => {
	try {
		const mutation = gql`
			mutation placeOrder($guestOrderInput: GuestOrderInput!) {
				createGuestOrder(guestOrderInput: $guestOrderInput)
			}
		`;

		const data = await client.mutate({
			mutation,
			variables: { guestOrderInput: inputs }
		});

		return data;
	} catch (err) {
		return "error";
	}
};
