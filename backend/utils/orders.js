const Guest = require("../models/guest");
const Product = require("../models/product");
const Order = require("../models/order");
const PubSub = require("../graphql/PubSub");
const pubsub = new PubSub().getInstance();
const { ORDER_PLACED } = require("./constants");
const { getTotal } = require("./products");

const createGuestOrder = async args => {
	try {
		const guest = new Guest({
			contact: args.guestOrderInput.contact,
			address: args.guestOrderInput.address,
			name: args.guestOrderInput.name
		});

		const guestResult = await guest.save();

		const products = await Product.find({
			_id: { $in: args.guestOrderInput.products }
		});

		let total = getTotal(products, args.guestOrderInput.products);

		const order = new Order({
			products,
			total,
			status: "PENDING",
			creator: guestResult
		});

		await order.save();

		pubsub.publish(ORDER_PLACED, {
			orderPlaced: {
				products: args.guestOrderInput.products,
				total,
				status: "PENDING",
				creator: guestResult
			}
		});

		return "SUCCESS";
	} catch (err) {
		return "FAILED";
	}
};

module.exports = {
	createGuestOrder
};
