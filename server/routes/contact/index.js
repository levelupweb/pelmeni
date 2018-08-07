const express = require("express");
const contactValidation = require("./middleware/contactValidation");
const handleValidation = require("./middleware/handleValidation");
const { errCode0014 } = require("../../errors");
const sendEmail = require("../../utils/sendEmail");
const generateContactEmail = require("../../email/contact");
const router = express.Router();

router.post(
	"/",
	[contactValidation, handleValidation],
	({ matchedData }, res) =>
		sendEmail(generateContactEmail(matchedData))
			.then(() => res.status(200).json(true))
			.catch(
				error => console.log(error) || res.status(500).json(errCode0014(error))
			)
);

module.exports = router;
