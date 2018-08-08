const Promo = require("../../../models/Promo");
const { errCode0021, errCode0022 } = require("../../../errors");

module.exports = ({ parsedId }, res, next) =>
	Promo.findById(parsedId)
		.then(promo => {
			if (promo) {
				return next();
			}

			return res.status(500).json(errCode0021());
		})
		.catch(err => res.status(500).json(errCode0022(err)));
