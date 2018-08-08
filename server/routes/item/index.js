const express = require("express");
const Item = require("../../models/Item");
const auth = require("../../middlewares/auth");
const validateCreate = require("./middleware/validateCreate");
const handleValidation = require("./middleware/handleValidation");
const validateUpdate = require("./middleware/validateUpdate");
const checkItem = require("./middleware/checkItem");
const parseId = require("./middleware/parseId");

const { errCode0011, errCode0019 } = require("../../errors");

const router = express.Router();

router.post(
	"/create",
	[auth, validateCreate, handleValidation],
	({ matchedData }, res) =>
		Item.create(matchedData)
			.then(item => res.status(500).json(item))
			.catch(
				error => console.log(error) || res.status(500).json(errCode0011(error))
			)
);

router.put(
	"/update",
	[auth, parseId, checkItem, validateUpdate, handleValidation],
	({ parsedId, matchedData }, res) =>
		Item.findOneAndUpdate({ _id: parsedId }, matchedData, { new: true })
			.then(category => res.json(category))
			.catch(err => res.status(500).json(errCode0019(err)))
);

module.exports = router;
