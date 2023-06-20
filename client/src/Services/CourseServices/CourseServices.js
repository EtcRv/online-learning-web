import Api from "../Api";

const CourseServices = {
  createCourse(teacherId, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post(`user/student-profile`, teacherId, { headers });
  },
  getCourseInformation(courseId, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().get(`/course/${courseId}`, { headers });
  },
  updateCourseInformation(course, token) {
    const headers = { Authorization: `Bearer ${token}` };
    const { type_update, data, courseId } = course;
    return Api().post(`/update-course/${courseId}/${type_update}`, data, {
      headers,
    });
  },
  getAllSectionOfCourse(courseId, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().get(`/get-section/${courseId}/`, {
      headers,
    });
  },
  getAllLectureOfCourse(courseId, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().get(`/get-lecture/${courseId}/`, {
      headers,
    });
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
};

export default CourseServices;
