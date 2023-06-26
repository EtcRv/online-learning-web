import Api from "../Api";

const AuthenticationServices = {
  register(user) {
    return Api().post("register", user);
  },
  login(user) {
    return Api().post("login", user);
  },
  checkTeacherLoginFirstTime(userId) {
    return Api().get(`checklogin/${userId}`);
  },
};

export default AuthenticationServices;
