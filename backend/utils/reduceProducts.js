module.exports = function(prices, quantities) {
	let sum = 0;
	for (var i = 0; i < prices.length; i++) {
		sum += prices[i].price * quantities[i].quantity;
	}
	return sum;
};
