const mongoose = require("mongoose");
const { 
    MODEL_CATEGORY,
    MODEL_ITEM
} = require("../../consts/models");

const {
    CATEGORY_TITLE,
    CATEGORY_DESCRIPTION,
    CATEGORY_ITEMS
} = require("./consts");

const CategorySchema = new mongoose.Schema({
    [CATEGORY_TITLE]: {
        type: String,
        required: true,
    },
    [CATEGORY_DESCRIPTION]: {
        type: String,
        required: true
    },
    [CATEGORY_ITEMS]: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: MODEL_ITEM,
        default: [],
    }]
});

module.exports = mongoose.model(MODEL_CATEGORY, CategorySchema);