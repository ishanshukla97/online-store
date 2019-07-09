const { gql } = require("apollo-server-express");

module.exports = gql`
	type Product {
		_id: ID!
		img: String!
		title: String!
		description: String!
		category: String!
		price: Float!
	}

	type AuthData {
		userId: ID!
		token: String!
		ExpirationTime: Int!
	}

	input ProductInput {
		img: String!
		title: String!
		description: String!
		category: String!
		price: Float!
	}

	input AdminInput {
		username: String!
		password: String!
	}

	type Query {
		products: [Product!]!
		login(adminInput: AdminInput): AuthData
	}
	type Mutation {
		createProduct(productInput: ProductInput!): Product!
		updateProduct(productInput: ProductInput!, productId: String!): Product!
		deleteProduct(productId: String!): Product!
	}
`;
