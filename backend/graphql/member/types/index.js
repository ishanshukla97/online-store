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

	type Guest {
		contact: String!
		address: String!
		name: String!
	}

	type Member {
		contact: String!
		email: String!
		password: String!
		address: String!
		name: String!
	}

	union User = Guest | Member

	input MemberLogin {
		email: String!
		password: String!
	}

	input MemberRegister {
		contact: String!
		email: String!
		password: String!
		address: String!
		name: String!
	}

	input ProductIdQty {
		_id: ID!
		name: String!
		quantity: Int!
	}

	input GuestOrderInput {
		contact: String!
		address: String!
		name: String!
		products: [ProductIdQty!]!
	}

	input MemberOrderInput {
		products: [ProductIdQty!]!
	}

	type Query {
		products: [Product!]!
		loginUser(memberLoginInput: MemberLogin): AuthData
	}
	type Mutation {
		createGuestOrder(guestOrderInput: GuestOrderInput): String
		registerUser(memberRegisterInput: MemberRegister): String
		createMemberOrder(memberOrderInput: MemberOrderInput): String
	}
`;
