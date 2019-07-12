import gql from "graphql-tag";

const Product = {
	create: (inputs, { token }, client) => {
		try {
			const mutation = gql`
				mutation createProduct($productInput: ProductInput!) {
					createProduct(productInput: $productInput) {
						_id
						img
						title
						description
						category
						price
					}
				}
			`;
			delete inputs._id;
			inputs.price = parseFloat(inputs.price);
			const data = client.mutate({
				mutation,
				variables: { productInput: inputs },
				context: {
					headers: {
						authorization: "Bearer " + token
					}
				}
			});
			return data;
		} catch (err) {
			return null;
		}
	},

	update: (inputs, { token }, client) => {
		try {
			const mutation = gql`
				mutation updateProduct(
					$productInput: ProductInput!
					$productId: String!
				) {
					updateProduct(
						productInput: $productInput
						productId: $productId
					) {
						_id
						img
						title
						category
						description
						price
					}
				}
			`;

			const id = inputs._id;
			delete inputs._id;

			inputs.price = parseFloat(inputs.price);

			const data = client.mutate({
				mutation,
				variables: { productInput: inputs, productId: id },
				context: {
					headers: {
						authorization: "Bearer " + token
					}
				}
			});
			return data;
		} catch (err) {
			return null;
		}
	},

	remove: (inputs, { token }, client) => {
		try {
			const mutation = gql`
				mutation deleteProduct($productId: String!) {
					deleteProduct(productId: $productId) {
						_id
						img
						title
						description
						category
						price
					}
				}
			`;
			const data = client.mutate({
				mutation,
				variables: { productId: inputs._id },
				context: {
					headers: {
						authorization: "Bearer " + token
					}
				}
			});
			return data;
		} catch (err) {
			return null;
		}
	}
};

export default Product;
