const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const adminServer = require("./graphql/admin");
const memberServer = require("./graphql/member");
const memberAuth = require("./middleware/member-auth");
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

const PORT = process.env.PORT || 5000;

app.listen(PORT);
