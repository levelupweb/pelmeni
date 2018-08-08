const Item = require("../../../models/Item");
const { errCode0018, errCode0016 } = require("../../../errors");

module.exports = ({ parsedId }, res, next) =>
	Item.findById(parsedId)
		.then(item => {
			if (item) {
				return next();
			}
			return res.status(500).json(errCode0018());
		})
		.catch(err => res.status(500).json(errCode0016(err)));
