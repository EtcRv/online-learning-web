import Api from "../Api";

export default {
  getInfo(user, token) {
    const { userId, user_type } = user;
    if (user_type === "student") {
      return Api().get(`user/student-profile/${userId}`);
    } else {
      return Api().get(`user/teacher-profile/${userId}`);
    }
  },
};
