const express = require("express");
const Category = require("../../models/Category");
const auth = require("../../middlewares/auth");
const validateCreate = require("./middlewares/validateCreate");
const handleValidation = require("./middlewares/handleValidation");
const { CATEGORY_ITEMS } = require("../../models/Category/consts");
const checkCategory = require("./middlewares/checkCategory");
const validateUpdate = require("./middlewares/validateUpdate");
const parseId = require("./middlewares/parseId");

const { errCode0012, errCode0013, errCode0016 } = require("../../errors");

const router = express.Router();

router.post(
	"/create",
	[auth, validateCreate, handleValidation],
	({ matchedData }, res) =>
		Category.create(matchedData)
			.then(category => res.json(category))
			.catch(
				error => console.log(error) || res.status(500).json(errCode0012(error))
			)
);

router.get("/all", (req, res) =>
	Category.find({})
		.populate(CATEGORY_ITEMS)
		.then(categories => res.json(categories))
		.catch(
			error => console.log(error) || res.status(500).json(errCode0013(error))
		)
);

router.put(
	"/update",
	[auth, parseId, checkCategory, validateUpdate, handleValidation],
	({ parsedId, matchedData }, res) =>
		Category.findOneAndUpdate({ _id: parsedId }, matchedData, { new: true })
			.populate(CATEGORY_ITEMS)
			.then(category => res.json(category))
			.catch(err => res.status(500).json(errCode0016(err)))
);

module.exports = router;
