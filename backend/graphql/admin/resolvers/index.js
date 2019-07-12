const bcrypt = require("bcrypt");
const Admin = require("../../../models/admin");
const Product = require("../../../models/product");
const keys = require("../../../config/keys");
const jwt = require("jsonwebtoken");
const PubSub = require("../../PubSub");
const pubsub = new PubSub().getInstance();
const { ORDER_PLACED } = require("../../../utils/constants");
const {
	createProduct,
	updateProduct,
	deleteProduct,
	getProducts
} = require("../../../utils/products");

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
				return getProducts();
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

				const result = await createProduct(args);
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
				const result = await updateProduct(args);

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
				const result = await deleteProduct(args);

				return { ...result._doc, _id: result.id };
			} catch (err) {
				throw err;
			}
		}
	},
	Subscription: {
		orderPlaced: {
			subscribe: () => pubsub.asyncIterator([ORDER_PLACED])
		}
	}
};
