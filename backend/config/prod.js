const mongoDB = "online-store-dev";

module.exports = {
	mongoURI:
		process.env.MONGO_URI +
		mongoDB +
		"?retryWrites=true&w=majority",
	JWTSecret: process.env.JWT_SECRET
};
