const mongoose = require("mongoose");

const {
	USER_NAME,
	USER_PHONE,
	USER_MESSAGE,
	USER_DOSTAVKA,
	USER_EMAIL
} = require("./consts");

const UserSchema = new mongoose.Schema({
	[USER_NAME]: {
		type: String,
		default: null
	},
	[USER_EMAIL]: {
		type: String,
		default: null
	},
	[USER_PHONE]: {
		type: String,
		required: true
	},
	[USER_MESSAGE]: {
		type: String,
		default: null
	},
	[USER_DOSTAVKA]: {
		type: String,
		default: null
	}
});

module.exports = UserSchema;
