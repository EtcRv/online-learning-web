const AuthenticationController = require("../controllers/Authentication/AuthenticationController");
const CourseController = require("../controllers/Course/CourseController");
const MessageController = require("../controllers/Message/MessageController");
const UserProfileController = require("../controllers/User/UserProfileController");
const AuthenticationControllerPolicy = require("../policies/Authentication/AuthenticationControllerPolicy");
const TokenRequire = require("../policies/Authentication/TokenRequire");
const { User } = require("../models");
const CartController = require("../controllers/CartController/CartController");
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
  app.get("/teacher-profile/:id", UserProfileController.getAllInfoOfTeacher);
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
    TokenRequire.teacherAuth,
    CourseController.createNewCourse
  );
  app.get("/course/:courseId", CourseController.getCourseInfo);
  app.post(
    "/update-course/:courseId/:type",
    TokenRequire.teacherAuth,
    CourseController.updateCourseInfo
  );
  app.post(
    "/update-lecture/:courseId",
    TokenRequire.teacherAuth,
    CourseController.updateLecture
  );
  app.post(
    "/update-section/:courseId",
    TokenRequire.teacherAuth,
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
  app.get(
    "/teacher/get-allcourse/:teacherId",
    TokenRequire.auth,
    CourseController.getAllCourseOfTeacher
  );
  app.get(
    "/user/get-allcourse/:userId",
    TokenRequire.auth,
    CourseController.getAllCourseOfUser
  );
  app.get("/get-allcourse", CourseController.getAllCourse);
  app.post("/course/buy-course", TokenRequire.auth, CourseController.buyCourse);
  app.get(
    "/cart/get-course/:userId",
    TokenRequire.auth,
    CartController.getCourseInCart
  );
  app.get(
    "/cart/get-course-title/:title",
    CourseController.getAllCourseOfTitle
  );
  app.post(
    "/cart/add-course",
    TokenRequire.auth,
    CartController.addCourseIntoCart
  );
  app.post(
    "/cart/remove-course",
    TokenRequire.auth,
    CartController.removeCourseFromCart
  );
  app.post("/api/conversation", MessageController.createConversation);
  app.get(
    "/api/conversations/:userId",
    MessageController.getAllUserConversation
  );
  app.post("/api/message", MessageController.createMessage);
  app.get("/api/message/:conversationId", MessageController.getMessage);
  // app.post("/api/feedback", MessageController.createMessage);
  app.post(
    "/api/Feedback/create",
    TokenRequire.auth,
    CourseController.createNewFeedback
  );
  app.get("/api/Feedback/:courseId", CourseController.getFeedbacksByCourseId);
  app.get(
    "/api/all-user",
    TokenRequire.adminAuth,
    UserProfileController.getAllUserInfo
  );
  app.get(
    "/api/get-draftcourse",
    TokenRequire.adminAuth,
    CourseController.getDraftCourse
  );
  app.post(
    "/api/change-course-status/:courseId",
    TokenRequire.adminAuth,
    CourseController.changeCourseStatus
  );
  app.post(
    "/api/update-money/:userId",
    TokenRequire.adminAuth,
    UserProfileController.updateUserMoney
  );
  app.get("/api/Comments/:courseId", CourseController.getCommentsByCourseId);
  app.post("/api/Comments/create", CourseController.createNewComment);
  app.post("/api/genNewPassword", AuthenticationController.genNewPassword);
};
