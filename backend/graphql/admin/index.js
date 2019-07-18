const { ApolloServer } = require("apollo-server-express");
const TypeDefs = require("./types");
const Resolvers = require("./resolvers");
const adminAuth = require("../../middleware/adminAuth");

const SERVER = new ApolloServer({
	typeDefs: TypeDefs,
	resolvers: Resolvers,
	subscriptions: {
		onConnect: async (connectionParams, webSocket) => {
			if (connectionParams.authToken) {
				const auth = await adminAuth(connectionParams.authToken);
				if (auth.isAuth) return auth;
			}
			throw new Error("Invalid Authorization");
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
