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
  genNewPassword(email, newPassword) {
    return Api().post("/api/genNewPassword", {
      email: email,
      newPassword: newPassword,
    });
  },
};

export default AuthenticationServices;
