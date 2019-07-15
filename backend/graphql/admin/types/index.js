const { gql } = require("apollo-server-express");

module.exports = gql`
	type ProductIdQty {
		_id: ID!
		name: String!
		quantity: Int!
	}

	type Order {
		_id: ID!
		total: Float!
		status: String!
		creator: Guest!
		products: [ProductIdQty!]!
		createdAt: String!
		confirmedAt: String
		deliveredAt: String
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
		orders: [Order!]!
	}
	type Mutation {
		createProduct(productInput: ProductInput!): Product!
		updateProduct(productInput: ProductInput!, productId: String!): Product!
		deleteProduct(productId: String!): Product!
		setOrderStatus(orderId: String!, status: String!): Order!
	}
	type Subscription {
		orderPlaced: Order!
	}
`;
