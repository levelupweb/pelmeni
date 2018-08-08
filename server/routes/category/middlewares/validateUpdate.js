const { check } = require("express-validator/check");

const {
	CATEGORY_TITLE,
	CATEGORY_DESCRIPTION
} = require("../../../models/Category/consts");

module.exports = [
	check(CATEGORY_TITLE)
		.optional()
		.isLength({ max: 120, min: 10 })
		.withMessage(
			"Поле \"Название категории\" не может быть меньше 10 или больше 120 символов"
		),
	check(CATEGORY_DESCRIPTION)
		.optional()
		.isLength({ max: 240, min: 30 })
		.withMessage(
			"Поле \"Описание категории\" не может быть меньше 30 или больше 240 символов"
		)
];
