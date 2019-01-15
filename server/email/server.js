const emailjs = require("emailjs");

module.exports = emailjs.server.connect({
	user: process.env.SMTP_USER,
	password: process.env.SMTP_PASSWORD,
	host: process.env.SMTP_HOST,
	port: 465,
	ssl: true
});
