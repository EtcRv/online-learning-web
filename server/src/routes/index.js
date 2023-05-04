const AuthenticationController = require("../controllers/Authentication/AuthenticationController");
const AuthenticationControllerPolicy = require("../policies/Authentication/AuthenticationControllerPolicy");
const TokenRequire = require("../policies/Authentication/TokenRequire");
module.exports = (app) => {
  app.post(
    "/register",
    // AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
};
