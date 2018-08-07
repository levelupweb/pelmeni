const attachment = require("./attachment");

module.exports = data => ({
	text: "Обратная связь",
	from: process.env.SMTP_USER,
	// to: "<" + process.env.SMTP_USER + ">",
	to: "<beatzhitta@gmail.com>",
	subject: "Обратная связь на сайте Klassnye.com",
	attachment: attachment(data)
});
