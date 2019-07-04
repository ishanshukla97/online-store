const bcrypt = require("bcrypt");
const Product = require("../../../models/product");
const keys = require("../../../config/keys");
const jwt = require("jsonwebtoken");

module.exports = {
	products: async (args, req) => {
		try {
			const products = await Product.find();
			return products.map(product => {
				return { ...product._doc, _id: product.id };
			});
		} catch (err) {
			throw err;
		}
	}
};
