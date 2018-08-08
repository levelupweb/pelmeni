const { errCode0017 } = require("../../../errors");

module.exports = (req, res, next) => {
	if (req.query.id) {
		req.parsedId = req.query.id;
		return next();
	}

	return res.status(500).json(errCode0017);
};
