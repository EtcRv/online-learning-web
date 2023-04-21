const path = require("path");

module.exports = {
  port: process.env.PORT || 8888,
  db: {
    database: process.env.DB_NAME || "onlinelearningweb",
    user: process.env.DB_USER || "onlinelearningweb",
    password: process.env.DB_PASS || "onlinelearningweb",
    options: {
      dialect: process.env.DIALECT || "sqlite",
      host: process.env.HOST || "localhost",
      storage: path.resolve(__dirname, "../../onlinelearningweb.sqlite"),
    },
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || "secret",
  },
};
