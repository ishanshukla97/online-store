const { gql } = require("apollo-server-express");

module.exports = gql`
	type ProductIdQty {
		_id: ID!
		quantity: Int!
	}

	type Order {
		total: Float!
		status: String!
		creator: Guest!
		products: [ProductIdQty!]!
	}

	type Guest {
		contact: String!
		address: String!
		name: String!
	}

	type Member {
		contact: String!
		password: String!
		address: String!
		name: String!
	}

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
	type Subscription {
		orderPlaced: Order!
	}
`;
