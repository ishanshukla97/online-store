const Product = require("../../../models/product");
const Member = require("../../../models/member");
const {
	createGuestOrder,
	createMemberOrder
} = require("../../../utils/orders");
const { createMember, loginMember } = require("../../../utils/members");

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
		},

		loginUser: (obj, args, context, info) => {
			try {
				return loginMember(args);
			} catch (err) {
				throw err;
			}
		}
	},
	User: {
		__resolveType: user => {
			if (user.password) return "Member";
			return "Guest";
		}
	},
	Mutation: {
		createGuestOrder: (obj, args, context, info) => {
			return createGuestOrder(args);
		},

		registerUser: (obj, args, context, info) => {
			return createMember(args);
		},

		createMemberOrder: async (obj, args, context, info) => {
			if (!context.isAuth) {
				throw new Error("You need to be logged in");
			}
			const member = await Member.findById(context.userId);
			if (!member) {
				throw new Error("Invalid user");
			}

			return createMemberOrder({ ...args, member });
		}
	}
};
