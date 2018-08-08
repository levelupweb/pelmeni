const { PROMO_CODE, PROMO_DISCOUNT } = require("../../../models/Promo/consts");

const { check } = require("express-validator/check");

const isValidDiscount = value => value > 0 && value < 100;

module.exports = [
	check(PROMO_CODE).optional(),
	check(PROMO_DISCOUNT)
		.optional()
		.custom(isValidDiscount)
		.withMessage("Значение скидки должно быть от 0 до 100")
];
