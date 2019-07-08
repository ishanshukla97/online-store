const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const guestSchema = new Schema({
	contact: {
		type: String,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("Guest", guestSchema);
