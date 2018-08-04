const {
    PROMO_CODE,
    PROMO_START_DATE,
    PROMO_END_DATE,
    PROMO_DISCOUNT
} = require("../../../models/Promo/consts");

const { check } = require("express-validator/check");

const isValidDiscount = value => value > 0 && value < 100;

module.exports = [
    check(PROMO_CODE)
        .exists()
        .withMessage("Заполните поле \"Промо-код\""),
    check(PROMO_DISCOUNT)
        .exists()
        .withMessage("Заполните поле \"Скидка с промокодом\"")
        .custom(isValidDiscount)
        .withMessage("Значение скидки должно быть от 0 до 100"),
    check(PROMO_START_DATE)
        .optional(),
    check(PROMO_END_DATE)
        .optional()
];