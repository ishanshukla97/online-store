const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const adminServer = require("./graphql/admin");
const memberServer = require("./graphql/member");
const memberAuth = require("./middleware/memberAuth");
const { createServer } = require("http");
const PubSub = require("./graphql/PubSub");
const { SubscriptionServer } = require("subscriptions-transport-ws");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
	.connect(keys.mongoURI)
	.then(() => {
		console.log("Connected to DB");
	})
	.catch(err => {
		throw err;
	});

adminServer.applyMiddleware({ app, path: "/admin/graphql" });

memberServer.applyMiddleware({ app, path: "/member/graphql" });

const pubsub = new PubSub().getInstance();
const server = createServer(app);

adminServer.installSubscriptionHandlers(server);

const PORT = process.env.PORT || 5000;

server.listen(PORT);
