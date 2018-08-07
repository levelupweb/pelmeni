const { check } = require("express-validator/check");

module.exports = [
	check("name")
		.exists()
		.withMessage("Заполните поле 'Имя")
		.isLength({ max: 200 })
		.withMessage("Имя не может быть больше 200 символов"),
	check("email")
		.exists()
		.withMessage("Заполните поле 'Email")
		.isEmail()
		.trim()
		.normalizeEmail()
		.withMessage("Неверный формат E-mail адреса"),
	check("message")
		.exists()
		.withMessage("Заполните поле 'Сообщение")
		.isLength({ max: 10000 })
		.withMessage("Сообщение не может быть больше 10000 символов")
];
