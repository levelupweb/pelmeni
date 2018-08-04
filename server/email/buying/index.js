const attachment = require("./attachment");

module.exports = (data) => ({
    text: "Новая заявка",
    from: process.env.SMTP_USER,
    // to: "<" + process.env.SMTP_USER + ">",
    to: "<beatzhitta@gmail.com>",
    subject: "Новый заказ на сайте Klassnye.com",
    attachment: attachment(data)
});