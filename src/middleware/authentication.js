const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers["token"];

  jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
    if (err) {
      res.json({ msg: "Authentication fail" });
    } else {
      req.user = decode;
      next();
    }
  });
};
