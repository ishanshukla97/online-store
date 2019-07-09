const { ApolloServer } = require("apollo-server-express");
const TypeDefs = require("./types");
const Resolvers = require("./resolvers");

const SERVER = new ApolloServer({
	typeDefs: TypeDefs,
	resolvers: Resolvers,
	playground: {
		endpoint: "/member/graphql",
		settings: {
			"editor.theme": "dark"
		}
	}
});

module.exports = SERVER;
