const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

const memberAuth = token => {
	if (!token || token === "") {
		return {
			isAuth: false,
			decodedToken: false
		};
	}
	let decodedToken;
	try {
		decodedToken = jwt.verify(token, keys.JWTSecret);
	} catch (err) {
		return {
			isAuth: false,
			decodedToken: false
		};
	}
	if (!decodedToken) {
		return {
			isAuth: false,
			decodedToken: false
		};
	}
	return {
		isAuth: true,
		userId: decodedToken.userId
	};
};
module.exports = memberAuth;
