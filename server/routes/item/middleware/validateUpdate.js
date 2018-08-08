const { ITEM_PRICE, ITEM_WEIGHT } = require("../../../models/Item/consts");
const { check } = require("express-validator/check");

const isValidPrice = value => value > 0 && value < 10000;
const isValidWeight = value => value > 0 && value < 10000;

module.exports = [
	check(ITEM_PRICE)
		.optional()
		.custom(isValidPrice)
		.withMessage("Цена не может быть меньше 0 или больше 10000"),
	check(ITEM_WEIGHT)
		.optional()
		.custom(isValidWeight)
		.withMessage("Вес товара не может быть меньше 0 или больше 10000")
];
