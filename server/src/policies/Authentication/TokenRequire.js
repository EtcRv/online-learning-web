const jwt = require("jsonwebtoken");
const config = require("../../config/config");

module.exports = {
  async auth(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).send("Access denied. No token provided");

    try {
      jwt.verify(token, config.authentication.jwtSecret);
      next();
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send("Invalid token.");
    }
  },
  async adminAuth(req, res, next) {
    console.log("req.headers.authorization: ", req.headers.authorization);
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).send("Access denied. No token provided");

    try {
      jwt.verify(token, config.authentication.jwtSecret);
      const decoded = jwt.decode(token);
      if (decoded.user_type === "admin") {
        next();
      } else {
        res.status(400).send("Invalid token.");
      }
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send("Invalid token.");
    }
  },
  async teacherAuth(req, res, next) {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).send("Access denied. No token provided");

    try {
      jwt.verify(token, config.authentication.jwtSecret);
      const decoded = jwt.decode(token);
      if (decoded.user_type === "teacher") {
        next();
      } else {
        res.status(400).send("Invalid token.");
      }
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send("Invalid token.");
    }
  },
};
