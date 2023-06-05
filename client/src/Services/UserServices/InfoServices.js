import Api from "../Api";

export default {
  getInfo(user, token) {
    const { userId, user_type } = user;
    const headers = { Authorization: `Bearer ${token}` };
    if (user_type === "student") {
      return Api().get(`user/student-profile/${userId}`, { headers });
    } else if (user_type === "teacher") {
      return Api().get(`user/teacher-profile/${userId}`, { headers });
    }
  },
  setUserProfile(user, token) {
    const headers = { Authorization: `Bearer ${token}` };
    const { userData, user_type } = user;
    if (user_type === "student") {
      return Api().post(`user/student-profile`, userData, { headers });
    } else if (user_type === "teacher") {
      return Api().post(`user/teacher-profile`, userData, { headers });
    }
  },
  updatePassword(password, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post("/user/update-password", password, { headers });
  },
  deleteAccount(body, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post("/user/delete-account", body, { headers });
  },
};
