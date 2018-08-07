const emailServer = require("../email/server");

module.exports = email =>
	new Promise((resolve, reject) =>
		emailServer.send(email, (err, info) => {
			if (err) {
				reject(err);
				return;
			}

			return resolve(info);
		})
	);
