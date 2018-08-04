const express = require("express");
const password = require("password-hash-and-salt");
const createToken = require("../../utils/createToken");
const handleValidation = require("./middlewares/handleValidation");
const validateAuth = require("./middlewares/validateAuth");
const validateRegister = require("./middlewares/validateRegister");
const saltPassword = require("./middlewares/saltPassword");

const {
    errCode0003,
    errCode0004,
    errCode0005
} = require("../../errors");

const Admin = require("../../models/Admin");

const {
    ADMIN_LOGIN,
    ADMIN_PASSWORD,
    ADMIN_CREATED
} = require("../../models/Admin/consts");

const router = express.Router();

router.post("/register", [
    validateRegister, 
    handleValidation, 
    saltPassword
], ({ matchedData }, res) => Admin
    .create(matchedData)
    .then(user => res.json(user))
    .catch(err => res.status(500).json(errCode0005(err)))
)

router.post("/auth", [
    validateAuth, 
    handleValidation
], ({ matchedData }, res) => Admin
    .findOne({ [ADMIN_LOGIN]: matchedData[ADMIN_LOGIN] })
    .select(`+${ADMIN_PASSWORD}`)
    .then((admin) => {
        if (admin) {
            return password(matchedData[ADMIN_PASSWORD] + process.env.SECRET)
                .verifyAgainst(admin[ADMIN_PASSWORD], (err, verified) => {
                    if (err) {
                        return res.status(500).send(errCode0004(err));
                    }
                    if (!verified) {
                        return res.status(500).send(errCode2004());
                    }
                    return res.status(200).json({
                        token: createToken(admin._id),
                        admin: {
                            _id: admin._id,
                            [ADMIN_LOGIN]: admin[ADMIN_LOGIN],
                            [ADMIN_CREATED]: admin[ADMIN_CREATED]
                        }
                    })
                });
        }

        /**
         * User with this login not found
         */
        return res.status(500).json(errCode0003())
    })
    .catch(err => res.status(500).json(errCode0004(err)))
)

module.exports = router;