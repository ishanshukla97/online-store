const Product = require("../models/product");

const createProduct = async args => {
	const product = new Product({
		img: args.productInput.img,
		title: args.productInput.title,
		description: args.productInput.description,
		category: args.productInput.category,
		price: args.productInput.price
	});
	const result = await product.save();
	return result;
};

const updateProduct = async args => {
	const product = await Product.findById(args.productId);
	if (!product) {
		return new Error("This product does not exist");
	}

	product.img = args.productInput.img;
	product.title = args.productInput.title;
	product.description = args.productInput.description;
	product.category = args.productInput.category;
	product.price = args.productInput.price;

	const result = await product.save();
	return result;
};

const deleteProduct = async args => {
	const product = await Product.findById(args.productId);
	if (!product) {
		return new Error("This product does not exist");
	}

	const result = await product.remove();
	return result;
};

const getProducts = async () => {
	const products = await Product.find();
	return products.map(product => {
		return { ...product._doc, _id: product.id };
	});
};

const getTotal = (prices, quantities) => {
	let sum = 0;
	for (var i = 0; i < prices.length; i++) {
		sum += prices[i].price * quantities[i].quantity;
	}
	return sum;
};

module.exports = {
	getTotal,
	createProduct,
	updateProduct,
	deleteProduct,
	getProducts
};
