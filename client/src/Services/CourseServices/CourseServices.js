import Api from "../Api";

const CourseServices = {
  getCourseInformation(courseId) {
    return Api().get(`/course/${courseId}`);
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
  getAllCourse(teacherId, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().get(`/get-allcourse/${teacherId}/`, {
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
};

export default CourseServices;
