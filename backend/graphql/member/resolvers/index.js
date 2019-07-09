const bcrypt = require("bcrypt");
const Product = require("../../../models/product");
const keys = require("../../../config/keys");
const jwt = require("jsonwebtoken");
const reduceProducts = require("../../../utils/reduceProducts");
const Order = require("../../../models/order");
const Guest = require("../../../models/guest");

module.exports = {
	Query: {
		products: async () => {
			try {
				const products = await Product.find();
				return products.map(product => {
					return { ...product._doc, _id: product.id };
				});
			} catch (err) {
				throw err;
			}
		}
	},
	User: {
		__resolveType: user => {
			console.log(user);
			return "Guest";
		}
	}
	// createGuestOrder: async (args, req) => {
	// 	try {
	// 		const guest = new Guest({
	// 			contact: args.guestOrderInput.contact,
	// 			address: args.guestOrderInput.address,
	// 			name: args.guestOrderInput.name
	// 		});

	// 		const guestResult = await guest.save();

	// 		const products = await Product.find({
	// 			_id: { $in: args.guestOrderInput.products }
	// 		});

	// 		let total = reduceProducts(products, args.guestOrderInput.products);

	// 		const order = new Order({
	// 			products,
	// 			total,
	// 			status: "PENDING",
	// 			creator: guestResult
	// 		});

	// 		await order.save();

	// 		return "SUCCESS";
	// 	} catch (err) {
	// 		throw err;
	// 	}
	// }
};
