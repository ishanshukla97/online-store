const { ApolloServer } = require("apollo-server-express");
const memberAuth = require("../../middleware/memberAuth");
const TypeDefs = require("./types");
const Resolvers = require("./resolvers");

const SERVER = new ApolloServer({
	typeDefs: TypeDefs,
	resolvers: Resolvers,
	context: async ({ req }) => {
		const authHeader = req.headers.authorization || "";
		const token = authHeader.split(" ")[1];
		const auth = memberAuth(token);
		return auth;
	},
	playground: {
		endpoint: "/member/graphql",
		settings: {
			"editor.theme": "dark"
		}
	}
});

module.exports = SERVER;
