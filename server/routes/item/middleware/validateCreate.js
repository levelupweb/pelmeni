const Category = require("../../../models/Category");

const {
    ITEM_PRICE,
    ITEM_WEIGHT,
    ITEM_CATEGORY,
} = require("../../../models/Item/consts");

const { check } = require("express-validator/check");

const isValidPrice = value => 
    value > 0 && value < 10000;

const isValidWeight = value => 
    value > 0 && value < 10000;

const checkCategory = value => Category.count({ _id: value })
    .then(count => Promise.resolve(count === 1))
    .catch(err => console.log(err) || Promise.resolve(false))

module.exports = [
    check(ITEM_PRICE)
        .exists()
        .withMessage("Заполните поле \"Стоимость товара\"")
        .custom(isValidPrice)
        .withMessage("Цена не может быть меньше 0 или больше 10000"),
    check(ITEM_WEIGHT)
        .exists()
        .withMessage("Заполните поле \"Вес товара\"")
        .custom(isValidWeight)
        .withMessage("Вес товара не может быть меньше 0 или больше 10000"),
    check(ITEM_CATEGORY)
        .exists()
        .withMessage("Заполните поле \"Категория товара\"")
        .isMongoId()
        .withMessage("Неверный формат категории")
        .custom(checkCategory)
        .withMessage("Категория не найдена")
];