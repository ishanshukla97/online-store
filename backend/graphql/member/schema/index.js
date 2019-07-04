const { buildSchema } = require("graphql");

module.exports = buildSchema(`
    type Product {
        _id: ID!
        img: String!
        title: String!
        description: String!
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
        price: Float!
    }

    input MemberInput {
        username: String!
        password: String!
    }

    type RootQuery {
        products: [Product!]!
        login(memberInput: MemberInput): AuthData
    }

    schema {
        query: RootQuery
    }
`);
