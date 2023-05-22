const AuthenticationController = require("../controllers/Authentication/AuthenticationController");
const UserProfileController = require("../controllers/User/UserProfileController");
const AuthenticationControllerPolicy = require("../policies/Authentication/AuthenticationControllerPolicy");
const TokenRequire = require("../policies/Authentication/TokenRequire");
module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  );
  app.post("/login", AuthenticationController.login);
  app.get(
    "/checklogin/:id",
    AuthenticationController.checkTeacherLoginFirstTime
  );
  app.get(
    "/user/student-profile/:id",
    TokenRequire.auth,
    UserProfileController.getStudentInformation
  );
  app.get(
    "/user/teacher-profile/:id",
    TokenRequire.auth,
    UserProfileController.getTeacherInformation
  );
  app.post(
    "/user/student-profile",
    TokenRequire.auth,
    UserProfileController.setStudentInformation
  );
  app.post(
    "/user/teacher-profile",
    TokenRequire.auth,
    UserProfileController.setTeacherInformation
  );
};
