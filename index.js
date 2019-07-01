const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const adminSchema = require("./graphql/admin/schema");
const adminResolvers = require("./graphql/admin/resolvers");
const adminAuth = require("./middleware/admin-auth");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use("/admin", adminAuth);

mongoose
	.connect(keys.mongoURI)
	.then(() => {
		console.log("Connected to DB");
	})
	.catch(err => {
		throw err;
	});

app.use(
	"/admin/graphql",
	graphqlHttp({
		schema: adminSchema,
		rootValue: adminResolvers,
		graphiql: true
	})
);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
