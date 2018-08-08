const password = require("password-hash-and-salt");
const { ADMIN_PASSWORD } = require("../../../models/Admin/consts");
const { errCode0006 } = require("../../../errors");

module.exports = (req, res, next) =>
	password(req.matchedData[ADMIN_PASSWORD] + process.env.SECRET).hash(
		(error, hash) => {
			if (error) {
				/**
				 * Unhandled error when salting
				 */
				return res.status(500).json(errCode0006(error));
			}

			/**
			 * Store hashed password to db
			 */
			req.matchedData[ADMIN_PASSWORD] = hash;
			return next();
		}
	);
