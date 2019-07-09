const bcrypt = require("bcrypt");
const Admin = require("../../../models/admin");
const Product = require("../../../models/product");
const keys = require("../../../config/keys");
const jwt = require("jsonwebtoken");

module.exports = {
	Query: {
		login: async (
			obj,
			{ adminInput: { username, password } },
			context,
			info
		) => {
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
		products: async (obj, args, context, info) => {
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
		}
	},
	Mutation: {
		createProduct: async (parent, args, context, info) => {
			try {
				if (!context.isAuth) {
					throw new Error("Unauthenticated");
				}
				const admin = Admin.findOne({ _id: context.adminId });

				if (!admin) {
					throw new Error("Invalid user");
				}
				const product = new Product({
					img: args.productInput.img,
					title: args.productInput.title,
					description: args.productInput.description,
					category: args.productInput.category,
					price: args.productInput.price
				});
				const result = await product.save();
				return { ...result._doc, _id: result.id };
			} catch (err) {
				throw err;
			}
		},
		updateProduct: async (parent, args, context, info) => {
			if (!context.isAuth) {
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
				product.category = args.productInput.category;
				product.price = args.productInput.price;

				const result = await product.save();

				return { ...result._doc, _id: result.id };
			} catch (err) {
				throw err;
			}
		},
		deleteProduct: async (parent, args, context, info) => {
			if (!context.isAuth) {
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
	}
};
