const mongoose = require("mongoose");
const User = require("../User");

const { 
  MODEL_PURCHASE,
  MODEL_ITEM
} = require("../../consts/models");

const {
  PURCHASE_STATUS_CREATED,
  PURCHASE_STATUS,
  PURCHASE_USER,
  PURCHASE_ITEMS,
  PURCHASE_CREATED,
  PURCHASE_PROMO
} = require("./consts");

const ItemSchema = {
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: MODEL_ITEM,
    required: true, 
  },
  amount: {
    type: Number,
    required: true,
  }
}

const PurchaseSchema = new mongoose.Schema({
  [PURCHASE_ITEMS]: [ItemSchema],
  [PURCHASE_USER]: User,
  [PURCHASE_PROMO]: {
    type: String,
    default: null,
  },
  [PURCHASE_STATUS]: {
    type: String,
    default: PURCHASE_STATUS_CREATED,
  },
  [PURCHASE_CREATED]: {
    type: Date,
    default: Date.now(),
  },
});


module.exports = mongoose.model(MODEL_PURCHASE, PurchaseSchema);
