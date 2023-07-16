import Api from "../Api";

const CourseServices = {
  getCourseInformation(courseId) {
    return Api().get(`/course/${courseId}`);
  },
  getAllCourse() {
    return Api().get(`/get-allcourse`);
  },
  updateCourseInformation(course, token) {
    const headers = { Authorization: `Bearer ${token}` };
    const { type_update, data, courseId } = course;
    return Api().post(`/update-course/${courseId}/${type_update}`, data, {
      headers,
    });
  },
  getAllSectionOfCourse(courseId) {
    return Api().get(`/get-section/${courseId}`);
  },
  getAllLectureOfCourse(courseId) {
    return Api().get(`/get-lecture/${courseId}`);
  },
  updateLecture(courseId, lectures, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post(`/update-lecture/${courseId}/`, lectures, {
      headers,
    });
  },
  updateSection(courseId, sections, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post(`/update-section/${courseId}/`, sections, {
      headers,
    });
  },
  getAllCourseOfTeacher(teacherId, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().get(`/teacher/get-allcourse/${teacherId}/`, {
      headers,
    });
  },
  getAllCourseOfUser(userId, token) {
    // getAllCourseOfUser(userId) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().get(`/user/get-allcourse/${userId}`, {
      headers,
    });
  },
  getAllCourseOfTitle(title) {
    return Api().get(`/cart/get-course-title/${title}`);
  },
  createNewCourse(teacherId, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post(
      `/course/create-course`,
      { teacherId: teacherId },
      {
        headers,
      }
    );
  },
  buyCourse(data, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post("/course/buy-course", data, { headers });
  },
  postComment(data) {
    return Api().post("/api/Comments/create", data);
  },
  getCommentsByCourseId(courseId) {
    return Api().get(`/api/Comments/${courseId}`); //api/Comments/:courseId
  },
  postFeedback(data, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post("/api/Feedback/create", data, { headers });
  },
  getFeedback(courseId) {
    return Api().get(`/api/Feedback/${courseId}`);
  },
  getDraftCourse(token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().get("/api/get-draftcourse", { headers });
  },
  publicCourse(courseId, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post(`/api/change-course-status/${courseId}`, {}, { headers });
  },
};

export default CourseServices;
