const {
    ADMIN_PASSWORD,
    ADMIN_LOGIN
} = require("../../../models/Admin/consts");

const { check } = require("express-validator/check");

module.exports = [
    check(ADMIN_PASSWORD)
        .exists()
        .withMessage("Заполните поле \"Пароль\""),
    check(ADMIN_LOGIN)
        .exists()
        .withMessage("Заполните поле \"Логин\""),
]