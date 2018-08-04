const jwt = require('jsonwebtoken');

module.exports = (userId) => jwt.sign({ userId }, process.env.SECRET, { expiresIn: "3d" });