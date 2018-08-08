const Admin = require("../models/Admin");
const decode = require("../utils/decode");

const { errCode0003, errCode0007, errCode0008 } = require("../errors");

module.exports = (req, res, next) => {
	const token = req.headers.authorization;

	if (token) {
		return decode(
			token,
			decoded => {
				/**
				 * Set userId in req.userId (global object for every response)
				 */
				req.userId = decoded.userId;

				return Admin.findById(decoded.userId)
					.then(user => {
						if (!user) {
							/**
							 * User is not found
							 */
							return res.status(500).json(errCode0003());
						}

						req.user = user;
						return next();
					})
					.catch(error =>
						/**
						 * Token is corrupted
						 */
						res.status(500).json(errCode0007(error))
					);
			},
			error =>
				/**
				 * Token is expired or internal error
				 */
				res.status(500).send(errCode0007(error))
		);
	}
	/**
	 * Request doesn't contain token
	 */
	return res.status(500).send(errCode0008());
};
