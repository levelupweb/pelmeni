const createError = require("../utils/createError");

module.exports.errCode0001 = err => 
    createError("0001", "Произошла ошибка во время создания нового заказа. Попробуйте позже", err);

module.exports.errCode0002 = err => 
    createError("0002", "Произошла ошибка во время отправки уведомительного E-mail'а. Попробуйте позже", err);

module.exports.errCode0003 = err => 
    createError("0003", "Пользователь с таким логином не зарегистрирован", err);

module.exports.errCode0004 = err => 
    createError("0004", "Неизвестная ошибка сервера во время авторизации", err);

module.exports.errCode0005 = err => 
    createError("0005", "Неизвестная ошибка во время создания пользователя", err);

module.exports.errCode0006 = err => 
    createError("0006", "Неизвестная ошибка во время регистрации пользователя", err);

module.exports.errCode0007 = err => 
    createError("0007", "Токен недействителен", err);

module.exports.errCode0008 = err => 
    createError("0008", "Токен не предоставлен", err);

module.exports.errCode0009 = err => 
    createError("0009", "Непредвиденная ошибка во время создания промо-акции", err);

module.exports.errCode0010 = err => 
    createError("0010", "Ошибка во время проверки промо-кода", err);

module.exports.errCode0011 = err => 
    createError("0011", "Ошибка во время добавления товара", err);

module.exports.errCode0012 = err => 
    createError("0012", "Ошибка во время создания категории", err);

module.exports.errCode0013 = err => 
    createError("0013", "Ошибка во время поиска товаров", err);