import gql from "graphql-tag";

export const login = async (inputs, client) => {
	try {
		const query = gql`
			query login($adminInput: AdminInput!) {
				login(adminInput: $adminInput) {
					userId
					token
					ExpirationTime
				}
			}
		`;

		const data = await client.query({
			query,
			variables: { adminInput: inputs }
		});
		return data;
	} catch (err) {
		return undefined;
	}
};

export const getProducts = async ({ token }, client) => {
	const query = gql`
		query products {
			products {
				_id
				title
				description
				price
				img
				category
			}
		}
	`;

	const data = await client.query({
		query,
		context: {
			headers: {
				authorization: "Bearer " + token
			}
		}
	});
	return data;
};
