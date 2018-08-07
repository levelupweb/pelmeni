const mongoose = require("mongoose");
const User = require("../User");

const {
	MODEL_PURCHASE,
	MODEL_ITEM,
	MODEL_PROMO
} = require("../../consts/models");

const {
	PURCHASE_STATUS_CREATED,
	PURCHASE_STATUS,
	PURCHASE_USER,
	PURCHASE_ITEMS,
	PURCHASE_CREATED,
	PURCHASE_PROMO,
	PURCHASE_AGREEMENT,
	PURCHASE_ITEMS_ITEM,
	PURCHASE_ITEMS_AMOUNT
} = require("./consts");

const ItemSchema = {
	[PURCHASE_ITEMS_ITEM]: {
		type: mongoose.Schema.Types.ObjectId,
		ref: MODEL_ITEM,
		required: true
	},
	[PURCHASE_ITEMS_AMOUNT]: {
		type: Number,
		required: true
	}
};

const PurchaseSchema = new mongoose.Schema({
	[PURCHASE_ITEMS]: [ItemSchema],
	[PURCHASE_USER]: User,
	[PURCHASE_PROMO]: {
		type: mongoose.Schema.Types.ObjectId,
		ref: MODEL_PROMO,
		default: null
	},
	[PURCHASE_STATUS]: {
		type: String,
		default: PURCHASE_STATUS_CREATED
	},
	[PURCHASE_CREATED]: {
		type: Date,
		default: Date.now()
	},
	[PURCHASE_AGREEMENT]: {
		type: Boolean,
		required: true,
		default: false
	}
});

module.exports = mongoose.model(MODEL_PURCHASE, PurchaseSchema);
