const Promo = require("../../../models/Promo");
const Item = require("../../../models/Item");
const { PROMO_CODE } = require("../../../models/Promo/consts");
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
    PURCHASE_PROMO
} = require("../../../models/Purchase/consts");

const checkItems = value => Item.count({ $in: [value] })
    .then((count) => Promise.resolve(count === value.length))
    .catch(err => Promise.resolve(false));

const checkPromo = value => Promo.count({ [PROMO_CODE]: value })
    .then((count) => Promise.resolve(count === 1))
    .catch(err => Promise.resolve(false))

module.exports = [
    check(PURCHASE_PROMO)
        .optional()
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
        .withMessage("Не заполнено поле 'Продукты'. Попробуйте перезагрузить страницу и выбрать заново")
        .custom(checkItems)
        .withMessage("Некоторые товары из вашей корзины не найдены в базе данных")
]