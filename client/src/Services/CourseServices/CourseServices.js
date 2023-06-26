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
    const headers = { Authorization: `Bearer ${token}` };
    return Api().get(`/user/get-allcourse/${userId}`, {
      headers,
    });
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
};

export default CourseServices;
