const Guest = require("../models/guest");
const Product = require("../models/product");
const Order = require("../models/order");
const PubSub = require("../graphql/PubSub");
const pubsub = new PubSub().getInstance();
const { ORDER_PLACED, ORDER_STATE } = require("./constants");
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
			products: args.guestOrderInput.products,
			total,
			onModel: "Guest",
			status: ORDER_STATE.PENDING,
			creator: guestResult
		});

		await order.save();

		pubsub.publish(ORDER_PLACED, {
			orderPlaced: {
				products: args.guestOrderInput.products,
				total,
				status: ORDER_STATE.PENDING,
				creator: guestResult
			}
		});

		return "SUCCESS";
	} catch (err) {
		return "FAILED";
	}
};

const setOrderStatus = async args => {
	const order = await Order.findById(args.orderId);
	switch (args.status) {
		case ORDER_STATE.CANCELED:
			order.status = ORDER_STATE.CANCELED;
			break;

		case ORDER_STATE.CONFIRMED:
			order.status = ORDER_STATE.CONFIRMED;
			order.confirmedAt = Date.now();
			break;

		case ORDER_STATE.DELIVERED:
			order.status = ORDER_STATE.DELIVERED;
			order.deliveredAt = Date.now();
			break;

		default:
			throw new Error("Invalid status");
	}

	await order.save();
	const result = await Order.findById(args.orderId).populate(["creator"]);
	return result;
};

const orders = async () => {
	const result = await Order.find().populate(["creator"]);
	return result;
};

module.exports = {
	createGuestOrder,
	setOrderStatus,
	orders
};
