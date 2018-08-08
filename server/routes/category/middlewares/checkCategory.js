const Category = require("../../../models/Category");
const { errCode0018, errCode0016 } = require("../../../errors");

module.exports = ({ parsedId }, res, next) =>
	Category.findById(parsedId)
		.then(category => {
			if (category) {
				return next();
			}

			return res.status(500).json(errCode0018());
		})
		.catch(err => res.status(500).json(errCode0016(err)));
