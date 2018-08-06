const express = require("express");
const Promo = require("../../models/Promo");
const auth = require("../../middlewares/auth");
const validateCreate = require("./middleware/validateCreate");
const handleValidation = require("./middleware/handleValidation");

const {
    PROMO_CODE,
    PROMO_DISCOUNT
} = require("../../models/Promo/consts");

const {
    errCode0009,
    errCode0010
} = require("../../errors");

const router = express.Router();

router.post("/create", [
    auth,
    validateCreate,
    handleValidation
], ({ matchedData }, res) => Promo
    .create(matchedData)
    .then(promo => res.status(500).json(promo))
    .catch(error => console.log(error) || res.status(500).json(errCode0009(error)))
);

router.get("/check", (req, res) => Promo
    .findOne({
        [PROMO_CODE]: req.query.code
    })
    .then(promo => {
        res.json({
            discount: promo && promo[PROMO_DISCOUNT],
            code: promo && promo[PROMO_CODE],
        });
    })
    .catch(error => console.log(error) || res.status(500).json(errCode0010(error)))
)

module.exports = router;