const { buildSchema } = require("graphql");

module.exports = buildSchema(`
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
        password: String!
        address: String!
        name: String!
    }

    union User = Guest | Member

    input MemberLogin {
        username: String!
        password: String!
    }

    input ProductIdQty {
        _id: ID!
        quantity: Int!
    }

    input GuestOrderInput {
        contact: String!
        address: String!
        name: String!
        products: [ProductIdQty!]!
    }

    type RootQuery {
        products: [Product!]!
        login(memberLogin: MemberLogin): AuthData
    }

    type RootMutation {
        createGuestOrder(guestOrderInput: GuestOrderInput): String
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);
