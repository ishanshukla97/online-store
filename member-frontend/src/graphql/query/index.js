import gql from "graphql-tag";

export const fetchProducts = async (_, client) => {
	try {
		const query = gql`
			query fetchProducts {
				products {
					_id
					title
					description
					category
					price
					img
				}
			}
		`;

		const data = await client.query({
			query
		});

		return data;
	} catch (err) {
		return "error";
	}
};
