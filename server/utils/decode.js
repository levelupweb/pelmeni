const jwt = require("jsonwebtoken");

module.exports = (token, onDecode, onFail) =>
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (!err && decoded) return onDecode(decoded);
    return onFail(err);
  });