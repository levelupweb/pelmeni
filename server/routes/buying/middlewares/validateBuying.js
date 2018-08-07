const Promo = require("../../../models/Promo");
const Item = require("../../../models/Item");
const { check } = require("express-validator/check");

const {
	USER_PHONE,
	USER_NAME,
	USER_EMAIL,
	USER_MESSAGE,
	USER_DOSTAVKA
} = require("../../../models/User/consts");

const {
	PURCHASE_ITEMS,
	PURCHASE_PROMO,
	PURCHASE_AGREEMENT,
	PURCHASE_ITEMS_ITEM
} = require("../../../models/Purchase/consts");

const checkItems = value =>
	Item.countDocuments({
		_id: { $in: value.map(item => item[PURCHASE_ITEMS_ITEM]) }
	})
		.then(count => Promise.resolve(count === value.length))
		.catch(() => Promise.resolve(false));

const checkPromo = promo =>
	Promo.countDocuments({ _id: promo })
		.then(count => Promise.resolve(count === 1))
		.catch(() => Promise.resolve(false));

module.exports = [
	check(PURCHASE_AGREEMENT)
		.exists()
		.withMessage(
			"Вы не согласились с правилами обработки и хранения персональных данных"
		),
	check(PURCHASE_PROMO)
		.optional()
		.isMongoId()
		.withMessage("Неверный формат промо-кода")
		.custom(checkPromo)
		.withMessage("Промо-код не найден в базе данных"),
	check(USER_DOSTAVKA)
		.optional()
		.isLength({ max: 500 })
		.withMessage("Адрес доставки не может быть больше 500 символов"),
	check(USER_PHONE)
		.exists()
		.withMessage("Не заполнено поле \"Контактный телефон\""),
	check(USER_NAME)
		.optional()
		.isLength({ max: 200 })
		.withMessage("Имя не может быть больше 200 символов"),
	check(USER_EMAIL)
		.optional()
		.isEmail()
		.trim()
		.normalizeEmail()
		.withMessage("Неверный формат E-mail адреса"),
	check(USER_MESSAGE)
		.optional()
		.isLength({ max: 10000 })
		.withMessage("Сообщение не может быть больше 10000 символов"),
	check(PURCHASE_ITEMS)
		.exists()
		.withMessage(
			"Не заполнено поле 'Продукты'. Попробуйте перезагрузить страницу и выбрать заново"
		)
		.custom(checkItems)
		.withMessage("Некоторые товары из вашей корзины не найдены в базе данных")
];
