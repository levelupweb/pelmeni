const express = require("express");
const Promo = require("../../models/Promo");
const auth = require("../../middlewares/auth");
const validateCreate = require("./middleware/validateCreate");
const handleValidation = require("./middleware/handleValidation");
const validateUpdate = require("./middleware/validateUpdate");
const parseId = require("./middleware/parseId");
const checkPromo = require("./middleware/checkPromo");

const { PROMO_CODE } = require("../../models/Promo/consts");

const {
	errCode0009,
	errCode0010,
	errCode0020,
	errCode0023,
	errCode0024
} = require("../../errors");

const router = express.Router();

router.get("/all", [auth], (_, res) =>
	Promo.find()
		.then(promos => res.json(promos))
		.catch(err => res.status(500).json(errCode0020(err)))
);

router.post(
	"/create",
	[auth, validateCreate, handleValidation],
	({ matchedData }, res) =>
		Promo.create(matchedData)
			.then(promo => res.json(promo))
			.catch(
				error =>
					console.log("UNEXPECTED ERROR", error) ||
					res.status(500).json(errCode0009(error))
			)
);

router.put(
	"/update",
	[auth, parseId, checkPromo, validateUpdate, handleValidation],
	({ parsedId, matchedData }, res) =>
		Promo.findByIdAndUpdate(parsedId, matchedData, { new: true })
			.then(promo => res.json(promo))
			.catch(
				error =>
					console.log("UNEXPECTED ERROR", error) ||
					res.status(500).json(errCode0024(error))
			)
);

router.delete("/delete", [auth, parseId, checkPromo], ({ parsedId }, res) =>
	Promo.findByIdAndRemove(parsedId)
		.then(() => res.json(true))
		.catch(
			error =>
				console.log("UNEXPECTED ERROR", error) ||
				res.status(500).json(errCode0023(error))
		)
);

router.get("/check", (req, res) =>
	Promo.findOne({
		[PROMO_CODE]: req.query.code
	})
		.then(promo => {
			res.json(promo);
		})
		.catch(
			error =>
				console.log("UNEXPECTED ERROR", error) ||
				res.status(500).json(errCode0010(error))
		)
);

module.exports = router;
