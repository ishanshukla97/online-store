const { ApolloServer } = require("apollo-server-express");
const TypeDefs = require("./types");
const Resolvers = require("./resolvers");
const adminAuth = require("../../middleware/adminAuth");

const SERVER = new ApolloServer({
	typeDefs: TypeDefs,
	resolvers: Resolvers,
	context: ({ req }) => {
		const tokenWithBearer = req.headers.authorization || "";
		const token = tokenWithBearer.split(" ")[1];
		const Auth = adminAuth(token);

		return Auth;
	},
	playground: {
		endpoint: "/admin/graphql",
		settings: {
			"editor.theme": "dark"
		}
	}
});

module.exports = SERVER;
