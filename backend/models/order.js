const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	products: [
		{
			_id: {
				type: Schema.Types.ObjectId,
				required: true
			},
			name: {
				type: String,
				required: true
			},
			quantity: {
				type: Number,
				required: true
			}
		}
	],
	total: {
		type: Number,
		required: true
	},
	status: {
		type: String,
		enum: ["CANCELED", "PENDING", "CONFIRMED", "DELIVERED"],
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
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	confirmedAt: {
		type: Date,
		default: null
	},
	deliveredAt: {
		type: Date,
		default: null
	}
});

module.exports = mongoose.model("Order", orderSchema);
