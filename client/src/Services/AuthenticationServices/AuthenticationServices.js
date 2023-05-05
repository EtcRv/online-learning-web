import Api from "../Api";

export default {
  register(user) {
    return Api().post("register", user);
  },
  login(user) {
    return Api().post("login", user);
  },
  checkTeacherLoginFirstTime(userId) {
    return Api().post("checklogin", userId);
  },
};
