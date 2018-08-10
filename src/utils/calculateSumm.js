export default (price, amount, discount) => {
	if (discount) {
		return Math.ceil(((price * amount) / 100) * (100 - discount));
	}

	return price * amount;
};