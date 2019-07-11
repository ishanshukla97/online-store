const Product = require("../../../models/product");
const { createGuestOrder } = require("../../../utils/orders");

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
			return "Guest";
		}
	},
	Mutation: {
		createGuestOrder: (obj, args, context, info) => {
			return createGuestOrder(args);
		}
	}
};
