import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PURCHASE_STATUS_SENDED = "sended";
const PURCHASE_STATUS_CREATED = "created";
const PURCHASE_STATUS_DONE = "done";

const ItemSchema = new Schema({
  title: String,
  description: String,
  total: Number,
  price: Number,
  weight: Number,
  id: String,
  amount: Number,
});

const UserSchema = new Schema({
  name: String,
  phone: String,
  message: String,
  dostavka: String,
});

const PurchaseSchema = new Schema({
  items: [ItemSchema],
  user: UserSchema,
  status: {
    type: String,
    default: ""
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

const Purchase = mongoose.model("Purchase", PurchaseSchema);

module.exports = {
  model: Purchase,
  consts: {
    PURCHASE_STATUS_SENDED,
    PURCHASE_STATUS_CREATED,
    PURCHASE_STATUS_DONE,
  }
}
