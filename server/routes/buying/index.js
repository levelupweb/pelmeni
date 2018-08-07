const express = require("express");
const Purchase = require("../../models/Purchase");
const handleValidation = require("./middlewares/handleValidation");
const validateBuying = require("./middlewares/validateBuying");
const sendEmail = require("../../utils/sendEmail");
const generateBuyEmail = require("../../email/buying");

const { errCode0001 } = require("../../errors");

const {
	PURCHASE_STATUS_CREATED,
	PURCHASE_STATUS_SENDED,
	PURCHASE_ITEMS,
	PURCHASE_STATUS,
	PURCHASE_USER,
	PURCHASE_AGREEMENT,
	PURCHASE_PROMO
} = require("../../models/Purchase/consts");

const {
	USER_NAME,
	USER_DOSTAVKA,
	USER_PHONE,
	USER_MESSAGE,
	USER_EMAIL
} = require("../../models/User/consts");

const { ITEM_CATEGORY } = require("../../models/Item/consts");

const {
	MODEL_ITEM,
	MODEL_CATEGORY,
	MODEL_PROMO
} = require("../../models/Item/consts");

const router = express.Router();

router.post(
	"/buy",
	[validateBuying, handleValidation],
	({ matchedData }, res) => {
		/**
		 * Generate user
		 * object
		 */
		const user = {
			[USER_NAME]: matchedData[USER_NAME],
			[USER_DOSTAVKA]: matchedData[USER_DOSTAVKA],
			[USER_PHONE]: matchedData[USER_PHONE],
			[USER_MESSAGE]: matchedData[USER_MESSAGE],
			[USER_EMAIL]: matchedData[USER_EMAIL]
		};

		/**
		 * Create purchase
		 */

		Purchase.create({
			[PURCHASE_ITEMS]: matchedData[PURCHASE_ITEMS],
			[PURCHASE_USER]: user,
			[PURCHASE_STATUS]: PURCHASE_STATUS_CREATED,
			[PURCHASE_AGREEMENT]: matchedData[PURCHASE_AGREEMENT],
			[PURCHASE_PROMO]: matchedData[PURCHASE_PROMO]
		})
			.then(purchase =>
				Purchase.populate(purchase, {
					path: `${PURCHASE_ITEMS}.item`,
					model: MODEL_ITEM,
					populate: {
						path: ITEM_CATEGORY,
						model: MODEL_CATEGORY
					}
				}).then(purchase =>
					Purchase.populate(purchase, {
						path: PURCHASE_PROMO,
						model: MODEL_PROMO
					}).then(purchase =>
						sendEmail(generateBuyEmail(purchase))
							.then(() =>
								Purchase.findByIdAndUpdate(purchase._id, {
									[PURCHASE_STATUS]: PURCHASE_STATUS_SENDED
								}).then(() => res.status(200).json(true))
							)
							.catch(
								error =>
									console.log(error) || res.status(500).json(errCode0001(error))
							)
					)
				)
			)
			.catch(
				err =>
					console.log(err) ||
					/**
					 * Unhandled error
					 * please try again later
					 */
					res.status(500).json(errCode0001(err))
			);
	}
);

module.exports = router;
