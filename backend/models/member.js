const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const memberSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Member", memberSchema);
