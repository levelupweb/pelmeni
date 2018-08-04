const mongoose = require("mongoose");

const {
    MODEL_PROMO
} = require("../../consts/models");

const {
    PROMO_CODE,
    PROMO_START_DATE,
    PROMO_END_DATE,
    PROMO_DISCOUNT
} = require("./consts");

const PromoSchema = new mongoose.Schema({
    [PROMO_CODE]: {
        type: String,
        required: true,
    },
    [PROMO_DISCOUNT]: {
        type: Number,
        required: true,
    },
    [PROMO_START_DATE]: {
        type: Date,
        default: new Date(),
    },
    [PROMO_END_DATE]: {
        type: Date,
        default: null,
    }
});

module.exports = mongoose.model(MODEL_PROMO, PromoSchema);