const Member = require("../models/member");
const keys = require("../config/keys");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createMember = async args => {
	try {
		const hashedPassword = await bcrypt.hash(
			args.memberRegisterInput.password,
			12
		);

		const member = new Member({
			...args.memberRegisterInput,
			password: hashedPassword
		});

		const result = await member.save();
		return "SUCCESS";
	} catch (err) {
		if (err.code === 11000) {
			return new Error("Id with these credentials already exist");
		}
		return "FAILED";
	}
};

const loginMember = async ({ memberLoginInput: { email, password } }) => {
	try {
		const user = await Member.findOne({ email });
		if (!user) {
			return Error("Email does not exist");
		}

		const isEqual = await bcrypt.compare(password, user.password);
		if (!isEqual) {
			return Error("Invalid Password");
		}

		const token = await jwt.sign({ userId: user._id }, keys.JWTSecret, {
			expiresIn: "24h"
		});

		return { userId: user.id, token, ExpirationTime: 24 };
	} catch (err) {
		return new Error("Unknown error");
	}
};

module.exports = {
	createMember,
	loginMember
};
