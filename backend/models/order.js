const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	products: [
		{
			type: Schema.Types.ObjectId,
			ref: "Product"
		}
	],
	total: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		enum: ["PENDING", "CONFIRMED", "DELIVERED"],
		required: true
	},
	creator: {
		type: Schema.Types.ObjectId,
		required: true,
		refPath: "onModel"
	},
	onModel: {
		type: String,
		enum: ["Guest", "Member"]
	}
});

module.exports = mongoose.model("Order", orderSchema);
