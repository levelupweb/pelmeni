const mongoose = require("mongoose");
const Category = require("../Category");

const { MODEL_ITEM, MODEL_CATEGORY } = require("../../consts/models");

const { CATEGORY_ITEMS } = require("../Category/consts");

const { ITEM_PRICE, ITEM_WEIGHT, ITEM_CATEGORY } = require("./consts");

const ItemSchema = new mongoose.Schema({
	[ITEM_CATEGORY]: {
		type: mongoose.Schema.Types.ObjectId,
		ref: MODEL_CATEGORY,
		required: true
	},
	[ITEM_PRICE]: {
		type: Number,
		required: true
	},
	[ITEM_WEIGHT]: {
		type: Number,
		required: true
	}
});

ItemSchema.post("save", function(doc, next) {
	return Category.findByIdAndUpdate(doc[ITEM_CATEGORY], {
		$push: { [CATEGORY_ITEMS]: doc._id }
	}).then(() => next());
});

ItemSchema.post("remove", function(doc, next) {
	return Category.findByIdAndUpdate(doc[ITEM_CATEGORY], {
		$pull: { [CATEGORY_ITEMS]: doc._id }
	}).then(() => next());
});

module.exports = mongoose.model(MODEL_ITEM, ItemSchema);
