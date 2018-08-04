const express = require("express");
const Purchase = require("../../models/Purchase");
const handleValidation = require("./middlewares/handleValidation");
const validateBuying = require("./middlewares/validateBuying");
const sendEmail = require("../../utils/sendEmail");
const generateBuyEmail = require("../../email/buying");

const {
  errCode0001, 
  errCode0002 
} = require("../../errors");

const {
    PURCHASE_STATUS_CREATED,
    PURCHASE_STATUS_SENDED,
    PURCHASE_ITEMS,
    PURCHASE_STATUS,
    PURCHASE_USER
} = require("../../models/Purchase/consts");

const {
  ITEM_TITLE,
  ITEM_DESCRIPTION,
  ITEM_TOTAL,
  ITEM_PRICE,
  ITEM_AMOUNT,
  ITEM_WEIGHT,
  ITEM_ID,
} = require("../../models/Item/consts");

const {
  USER_NAME,
  USER_DOSTAVKA,
  USER_PHONE,
  USER_MESSAGE,
} = require("../../models/User/consts");

const router = express.Router();

router.post("/buy", [
    validateBuying,
    handleValidation
], ({ matchedData }, res) => {

    /**
     * Generate items
     * array
     */
    
    const items = matchedData[PURCHASE_ITEMS]
        .map(item => ({
              [ITEM_TITLE]: item[ITEM_TITLE],
              [ITEM_DESCRIPTION]: item[ITEM_DESCRIPTION],
              [ITEM_TOTAL]: item[ITEM_TOTAL],
              [ITEM_PRICE]: item[ITEM_PRICE],
              [ITEM_AMOUNT]: item[ITEM_AMOUNT],
              [ITEM_WEIGHT]: item[ITEM_WEIGHT],
              [ITEM_ID]: item[ITEM_ID],
          })
        )

    /**
     * Generate user
     * object
     */
    const user = {
      [USER_NAME]: matchedData[USER_NAME],
      [USER_DOSTAVKA]: matchedData[USER_DOSTAVKA],
      [USER_PHONE]: matchedData[USER_PHONE],
      [USER_MESSAGE]: matchedData[USER_MESSAGE]
    };

    /**
     * Create purchase
     */
    Purchase.create({
      [PURCHASE_ITEMS]: items, 
      [PURCHASE_USER]: user, 
      [PURCHASE_STATUS]: PURCHASE_STATUS_CREATED 
    })
      .then((purchase) => {
        /**
         * Send email first
         */
        return sendEmail(generateBuyEmail(purchase), () => 
        /**
         * Update purchase status
         * to sended and received
         */
          Purchase
            .findByIdAndUpdate(purchase._id, { [PURCHASE_STATUS]: PURCHASE_STATUS_SENDED })
            .then(() => res.status(200).json(true))
            .catch((error) => console.log(error) || res.status(500).json(errCode0001(error))),
          
          (err) => console.log(err) || res.status(500).json(errCode0002(err)));
        })
      .catch((err) => console.log(err) ||
          /**
           * Unhandled error
           * please try again later
           */
          res.status(500).json(errCode0001(err))
      )
});

module.exports = router;