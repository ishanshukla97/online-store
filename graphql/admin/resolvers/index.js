const bcrypt = require("bcrypt");
const Admin = require("../../../models/admin");
const Product = require("../../../models/product");
const keys = require("../../../config/keys");
const jwt = require("jsonwebtoken");

module.exports = {
	login: async ({ adminInput: { username, password } }) => {
		const admin = await Admin.findOne({ username: username });

		if (!admin) {
			throw new Error("Invalid credentials");
		}
		const isEqual = await bcrypt.compare(password, admin.password);

		if (!isEqual) {
			throw new Error("Invalid credentials");
		}
		const token = jwt.sign({ username: username }, keys.JWTSecret, {
			expiresIn: "1000h"
		});

		return { userId: admin.id, token: token, ExpirationTime: 1000 };
	},
	products: async (args, req) => {
		try {
			// if (!req.isAuth){
			// 	throw new Error("Unauthenticated")
			// }
			const products = await Product.find();
			return products.map(product => {
				return { ...product._doc, _id: product.id };
			});
		} catch (err) {
			throw err;
		}
	},
	createProduct: async (args, req) => {
		try {
			if (!req.isAuth) {
				throw new Error("Unauthenticated");
			}
			const admin = Admin.findOne({ _id: req.adminId });

			if (!admin) {
				throw new Error("Invalid user");
			}
			const product = new Product({
				img: args.productInput.img,
				title: args.productInput.title,
				description: args.productInput.description,
				price: args.productInput.price
			});
			const result = await product.save();
			return { ...result._doc, _id: result.id };
		} catch (err) {
			throw err;
		}
	},
	updateProduct: async (args, req) => {
		if (!req.isAuth) {
			throw new Error("Unauthenticated");
		}
		try {
			const product = await Product.findById(args.productId);
			if (!product) {
				throw new Error("This product does not exist");
			}

			product.img = args.productInput.img;
			product.title = args.productInput.title;
			product.description = args.productInput.description;
			product.price = args.productInput.price;

			const result = await product.save();

			return { ...result._doc, _id: result.id };
		} catch (err) {
			throw err;
		}
	},
	deleteProduct: async (args, req) => {
		if (!req.isAuth) {
			throw new Error("Unauthenticated");
		}
		try {
			const product = await Product.findById(args.productId);
			if (!product) {
				throw new Error("This product does not exist");
			}

			const result = await product.remove();

			return { ...result._doc, _id: result.id };
		} catch (err) {
			throw err;
		}
	}
};
