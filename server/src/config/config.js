const path = require("path");

module.exports = {
  port: process.env.PORT || 8888,
  db: {
    database: process.env.DB_NAME || "onlinelearningweb",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    options: {
      dialect: process.env.DIALECT || "mysql",
      host: process.env.HOST || "localhost",
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
