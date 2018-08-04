const express = require("express");
const Category = require("../../models/Category");
const auth = require("../../middlewares/auth");
const validateCreate = require("./middlewares/validateCreate");
const handleValidation = require("./middlewares/handleValidation");
const { CATEGORY_ITEMS } = require("../../models/Category/consts");

const {
    errCode0012,
    errCode0013
} = require("../../errors");

const router = express.Router();

router.post("/create", [
    auth,
    validateCreate,
    handleValidation
], ({ matchedData }, res) => Category
    .create(matchedData)
    .then(category => res.json(category))
    .catch(error => console.log(error) || res.status(500).json(errCode0012(error)))
);

router.get("/all", (req, res) => Category
    .find({})
    .populate(CATEGORY_ITEMS)
    .then((categories) => res.json(categories))
    .catch(error => console.log(error) || res.status(500).json(errCode0013(error)))
)

module.exports = router;