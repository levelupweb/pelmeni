const { check } = require("express-validator/check");

const {
	CATEGORY_TITLE,
	CATEGORY_DESCRIPTION
} = require("../../../models/Category/consts");

module.exports = [
	check(CATEGORY_TITLE)
		.exists()
		.withMessage("Заполните поле \"Название категории\""),
	check(CATEGORY_DESCRIPTION)
		.exists()
		.withMessage("Заполните поле \"Описание категории\"")
];
