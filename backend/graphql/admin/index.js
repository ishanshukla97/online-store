const { ApolloServer } = require("apollo-server-express");
const TypeDefs = require("./types");
const Resolvers = require("./resolvers");
const adminAuth = require("../../middleware/adminAuth");

const SERVER = new ApolloServer({
	typeDefs: TypeDefs,
	resolvers: Resolvers,
	subscriptions: {
		onConnect: (connectionParams, webSocket) => {
			console.log(connectionParams);
		}
	},
	context: async ({ req, connection }) => {
		if (connection) {
			// check connection for metadata
			return connection.context;
		} else {
			// check from req
			const authHeader = req.headers.authorization || "";
			const token = authHeader.split(" ")[1];
			const auth = adminAuth(token);
			console.log(req.headers.authorization, auth);
			return auth;
		}
	},
	playground: {
		endpoint: "/admin/graphql",
		settings: {
			"editor.theme": "dark"
		}
	}
});

module.exports = SERVER;
