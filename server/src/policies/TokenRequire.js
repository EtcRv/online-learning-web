const jwt = require("jsonwebtoken");
const config = require("../config/config");

module.exports = {
  async auth(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    // console.log("Token:", token);
    if (!token) return res.status(401).send("Access denied. No token provided");

    try {
      jwt.verify(token, config.authentication.jwtSecret);
      next();
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send("Invalid token.");
    }
  },
};
