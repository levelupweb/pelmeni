const express = require("express");
const Item = require("../../models/Item");
const auth = require("../../middlewares/auth");
const validateCreate = require("./middleware/validateCreate");
const handleValidation = require("./middleware/handleValidation");

const {
    errCode0011
} = require("../../errors");

const router = express.Router();

router.post("/create", [
    auth,
    validateCreate,
    handleValidation
], ({ matchedData }, res) => Item
    .create(matchedData)
    .then(item => res.status(500).json(item))
    .catch(error => console.log(error) || res.status(500).json(errCode0011(error)))
);

module.exports = router;