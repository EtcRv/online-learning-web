const AuthenticationController = require("../controllers/Authentication/AuthenticationController");
const CourseController = require("../controllers/Course/CourseController");
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
  app.post(
    "/user/update-password",
    TokenRequire.auth,
    AuthenticationController.changePassword
  );
  app.post(
    "/user/delete-account",
    TokenRequire.auth,
    AuthenticationController.closeAccount
  );
  app.post(
    "/course/create-course",
    // TokenRequire.auth,
    CourseController.createNewCourse
  );
  app.get(
    "/course/:courseId",
    // TokenRequire.auth,
    CourseController.getCourseInfo
  );
  app.post(
    "/update-course/:courseId/:type",
    // TokenRequire.auth,
    CourseController.updateCourseInfo
  );
  app.post(
    "/update-lecture/:courseId",
    // TokenRequire.auth,
    CourseController.updateLecture
  );
  app.post(
    "/update-section/:courseId",
    // TokenRequire.auth,
    CourseController.updateSection
  );
  app.get(
    "/get-lecture/:courseId",
    // TokenRequire.auth,
    CourseController.getLectureOfCourse
  );
  app.get(
    "/get-section/:courseId",
    // TokenRequire.auth,
    CourseController.getSectionOfCourse
  );
};
