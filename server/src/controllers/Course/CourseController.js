const {
  Course,
  Teacher,
  Section,
  Lecture,
  Enroll,
  User,
  Feedback,
  Student,
  Discussion,
} = require("../../models");
const { Op } = require("sequelize");
module.exports = {
  async createNewCourse(req, res) {
    try {
      const { teacherId } = req.body;
      const course = await Course.create();
      course.teacherId = teacherId;
      await course.save();
      const courseJson = course.toJSON();
      res.send({
        course: courseJson,
      });
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send({
        error: "Failed when create course",
      });
    }
  },
  async getCourseInfo(req, res) {
    try {
      const courseId = req.params.courseId;
      const course = await Course.findByPk(courseId);
      const courseJson = course.toJSON();
      res.send({
        course: courseJson,
      });
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send({
        error: "Failed when get course information",
      });
    }
  },
  async updateCourseInfo(req, res) {
    try {
      const type_update = req.params.type;
      const courseId = req.params.courseId;
      if (type_update === "goals") {
        const { learning_object, required_skills, course_for } = req.body;

        const updatedData = {
          learning_object: learning_object.join("\n"),
          required_skills: required_skills,
          course_for: course_for,
        };

        const course = await Course.update(updatedData, {
          where: {
            id: courseId,
          },
        });

        console.log("course: ", course);
      } else if (type_update === "landing_page") {
        const {
          course_title,
          course_sub_title,
          course_description,
          language,
          level,
          category,
          primarily_taught,
          course_image,
          promotional_video,
        } = req.body;

        const updatedData = {
          title: course_title,
          sub_title: course_sub_title,
          course_description: course_description,
          language: language,
          level: level === "-- Select Level --" ? "" : level,
          category: category === "-- Select Category --" ? "" : category,
          primarily_taught: primarily_taught,
          course_image:
            course_image === ""
              ? "https://s.udemycdn.com/course/750x422/placeholder.jpg"
              : course_image,
          promotional_video: promotional_video,
        };

        await Course.update(updatedData, {
          where: {
            id: courseId,
          },
        });
      } else if (type_update === "price") {
        const { price } = req.body;
        console.log("price: ", price);
        let updatedData = {
          price: 0,
        };

        if (price === "Free") {
          updatedData.price = 0;
        } else if (price === "19.99") {
          console.log("Update price 19.99");
          updatedData.price = 19.99;
        } else if (price === "24.99") {
          updatedData.price = 24.99;
        } else if (price === "29.99") {
          updatedData.price = 29.99;
        }

        await Course.update(updatedData, {
          where: {
            id: courseId,
          },
        });
      } else if (type_update === "course_messages") {
        const { welcome_message, congratulation_message } = req.body;
        const updatedData = {
          welcome_message: welcome_message,
          congratulation_message: congratulation_message,
        };

        await Course.update(updatedData, {
          where: {
            id: courseId,
          },
        });
      }

      const course = await Course.findByPk(courseId);
      res.send({
        course: course.toJSON(),
      });
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send({
        error: "Failed when update course information",
      });
    }
  },
  async updateSection(req, res) {
    try {
      const courseId = req.params.courseId;
      let { allSections } = req.body;
      const newAllSections = Promise.all(
        allSections.map(async (section, idx) => {
          if (!Number.isInteger(Number(section.id))) {
            const newSection = await Section.create({
              name: section.name,
            });
            console.log("newSection:",newSection)
            newSection.courseId = courseId;
            await newSection.save();
            return newSection;
          } else {
            const newSection = await Section.update(
              { name: section.name },
              {
                where: {
                  id: section.id,
                },
              }
            );

            return newSection;
          }
        })
      );

      const newData = await newAllSections;
      const newSectionInfo = newData.filter((data) => {
        return data.id !== undefined;
      });

      allSections.forEach((section) => {
        if (!Number.isInteger(Number(section.id))) {
          const sectionChange = newSectionInfo.find(
            (data) => data.name === section.name
          );
          section.id = sectionChange.id;
        }
      });

      const allSectionInDB = await Section.findAll({
        where: {
          courseId: courseId,
        },
      });

      await Promise.all(
        allSectionInDB.map(async (section, idx) => {
          let flag = 0;
          for (let sec of allSections) {
            if (sec.id == section.id) flag = 1;
          }

          if (flag == 0) {
            const destroySection = await Section.findByPk(section.id);
            await Lecture.destroy({
              where: {
                sectionId: section.id,
              },
            });
            await destroySection.destroy();
          }
        })
      );

      res.send(newData);
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed when update section",
      });
    }
  },
  async updateLecture(req, res) {
    try {
      const courseId = req.params.courseId;
      let { allLectures } = req.body;

      const newAllLectures = Promise.all(
        allLectures.map(async (lecture, idx) => {
          if (!Number.isInteger(Number(lecture.id))) {
            const newLecture = await Lecture.create({
              name: lecture.name,
              video_url: lecture.video_url,
            });
            newLecture.sectionId = lecture.sectionId;
            newLecture.courseId = courseId;
            await newLecture.save();
            return newLecture;
          } else {
            const newLecture = await Lecture.update(
              { name: lecture.name, video_url: lecture.video_url },
              {
                where: {
                  id: lecture.id,
                },
              }
            );
            return newLecture;
          }
        })
      );

      const newData = await newAllLectures;
      const newLectureInfo = newData.filter((data) => {
        return data.id !== undefined;
      });

      allLectures.forEach((lecture) => {
        if (!Number.isInteger(Number(lecture.id))) {
          const lectureChange = newLectureInfo.find(
            (data) =>
              data.name === lecture.name && data.sectionId === lecture.sectionId
          );
          lecture.id = lectureChange.id;
        }
      });

      const allLectureInDB = await Lecture.findAll({
        where: {
          courseId: courseId,
        },
      });

      await Promise.all(
        allLectureInDB.map(async (lecture, idx) => {
          let flag = 0;
          for (let lec of allLectures) {
            if (lec.id == lecture.id) flag = 1;
          }

          if (flag == 0) {
            await Lecture.destroy({
              where: {
                id: lecture.id,
              },
            });
          }
        })
      );

      res.send({
        status: "Update Successful",
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed when update lecture",
      });
    }
  },
  async getSectionOfCourse(req, res) {
    try {
      const courseId = req.params.courseId;
      const sectionOfCourse = await Section.findAll({
        where: {
          courseId: courseId,
        },
      });

      res.send({
        sections: sectionOfCourse,
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed when get sections",
      });
    }
  },
  async getLectureOfCourse(req, res) {
    try {
      const courseId = req.params.courseId;
      const lectureOfCourse = await Lecture.findAll({
        where: {
          courseId: courseId,
        },
      });
      res.send({
        lectures: lectureOfCourse,
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed when get lectures",
      });
    }
  },
  async getAllCourseOfTeacher(req, res) {
    try {
      const teacherId = req.params.teacherId;
      const allCourses = await Course.findAll({
        where: {
          teacherId: teacherId,
        },
      });
      res.send({
        courses: allCourses,
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed when get courses",
      });
    }
  },
  async getAllCourse(req, res) {
    try {
      const allCourses = await Course.findAll({
        where: {
          status: "Public",
        },
      });
      const coursesData = Promise.all(
        allCourses.map(async (course) => {
          const teacher = await Teacher.findByPk(course.teacherId);
          const user = await User.findByPk(teacher.userId);

          return {
            id: course.id,
            courseImg: course.course_image,
            title: course.title,
            teacherName: user.name,
            rating: course.rating,
            price: course.price,
          };
        })
      );

      res.send({
        courses: await coursesData,
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed when get all courses",
      });
    }
  },
  async getCourseInformation(req, res) {
    try {
      const courseId = req.params.courseId;
      const course = await Course.findByPk(courseId);
      res.send({
        course: course,
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed when get course information",
      });
    }
  },
  async getAllCourseOfUser(req, res) {
    try {
      const userId = req.params.userId;
      const coursesId = await Enroll.findAll({
        where: {
          userId: userId,
        },
      });
      const coursesData = Promise.all(
        coursesId.map(async (courseId) => {
          const course = await Course.findByPk(courseId.courseId);
          return {
            courseInformation: course,
          };
        })
      );

      res.send(await coursesData);
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed when get course information",
      });
    }
  },
  async getAllCourseOfTitle(req, res) {
    try {
      const { title } = req.params;
      const courses = await Course.findAll({
        where: {
          title: {
            [Op.like]: `%${title}%`, // Tìm các khóa học có title chứa từ khóa tìm kiếm
          },
        },
      });

      const coursesData = Promise.all(
        courses.map(async (course) => {
          const teacher = await Teacher.findByPk(course.teacherId);
          const user = await User.findByPk(teacher.userId);
          return {
            id: course.id,
            courseImg: course.course_image,
            title: course.title,
            teacherName: user.name,
            rating: course.rating,
            price: course.price,
          };
        })
      );
      res.send(await coursesData);
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed to fetch search results",
      });
    }
  },
  async getCommentsByCourseId(req, res) {
    try {
      const { courseId } = req.params;
      const discussions = await Discussion.findAll({
        where: {
          courseId: courseId,
        },
      });
      
      const discusionData = Promise.all(
        discussions.map(async (discussion) => {
          const user = await User.findOne({
            where: {
              id: discussion.userId,
            },
          });
          let avatar_url = "";
          if (user) {
            if (user.user_type === "teacher") {
              const teacher = await Teacher.findOne({
                where: {
                  userId: user.id,
                },
              });
              avatar_url = teacher?.avatar_url;
            } else if (user.user_type === "student") {
              const student = await Student.findOne({
                where: {
                  userId: user.id,
                },
              });
              avatar_url = student?.avatar_url;
            } else if (user.user_type === "admin") {
              avatar_url = "http://facebookfplus.com/upload/images/600_97d118b7a6f8f87d18f7b1385ea7665e.png";
            }
          }
          return {
            id: discussion.id,
            name: user.name,
            comment: discussion.comment,
            avatar_url: avatar_url,
          };
        })
      );
      res.send(await discusionData);
    } catch (err) {
      console.error("Error retrieving comments:", err);
      res.status(400).json({ message: "Internal server error", err });
    }
  },
  async createNewComment(req, res) {
    try {
      const { courseId, comment, userId } = req.body;

      const newComment = await Discussion.create({
        comment: comment,
      });
      newComment.userId = userId;
      newComment.courseId = courseId;
      await newComment.save();
      const commentJson = newComment.toJSON();
      res.send({
        discussions: commentJson,
      });
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send({
        error: "Failed when creating comment",
      });
    }
  },
  async createNewFeedback(req, res) {
    try {
      const { courseId, userId, feedbackDescription, rating } = req.body;

      // Tạo feedback mới
      const feedback = await Feedback.create({
        feedback_description: feedbackDescription,
        rating: rating,
      });

      feedback.courseId = courseId;
      feedback.userId = userId;

      await feedback.save();

      const feedbackJson = feedback.toJSON();
      res.send({
        feedback: feedbackJson,
      });
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send({
        error: "Failed when creating feedback",
      });
    }
  },
  async getFeedbacksByCourseId(req, res) {
    try {
      const courseId = req.params.courseId;

      // Tìm các feedback có courseId tương ứng trong cơ sở dữ liệu
      const feedbacks = await Feedback.findAll({
        where: {
          courseId: courseId,
        },
      });

      console.log("feedbacks: ", feedbacks);
      const feedbackData = Promise.all(
        feedbacks.map(async (feedback) => {
          const user = await User.findByPk(feedback.userId);
          let avatar_url = "";
          if (user.user_type === "teacher") {
            const teacher = await Teacher.findOne({
              where: {
                userId: user.id,
              },
            });
            avatar_url = teacher.avatar_url;
          } else {
            const student = await Student.findOne({
              where: {
                userId: user.id,
              },
            });
            avatar_url = student.avatar_url;
          }

          return {
            id: feedback.id,
            rating: feedback.rating,
            name: user.name,
            description: feedback.feedback_description,
            avatar: avatar_url,
          };
        })
      );

      res.send(await feedbackData);
    } catch (err) {
      console.log("err:", err);
      res.status(400).send({
        error: "Failed to get feedbacks by courseId",
      });
    }
  },
  async buyCourse(req, res) {
    try {
      const { courses, totalPrice, userId } = req.body;

      const user = await User.findByPk(userId);
      user.money = user.money - totalPrice;
      await user.save();
      courses.map(async (courseId, idx) => {
        const newEnroll = await Enroll.create();
        newEnroll.courseId = courseId;
        newEnroll.userId = userId;
        await newEnroll.save();
        const course = await Course.findByPk(courseId);
        const teacher = await Teacher.findByPk(course.teacherId);
        const teacherUser = await User.findByPk(teacher.userId);
        teacherUser.money += course.price;
        await teacherUser.save();
      });

      res.send("Buy Successfully");
    } catch (err) {
      res.status(400).send({
        error: "Failed when Buy course",
      });
    }
  },
  async getDraftCourse(req, res) {
    try {
      const response = await Course.findAll({
        where: {
          status: "Draft",
        },
      });

      res.send(response);
    } catch (err) {
      res.status(400).send({
        error: "Failed when get course information",
      });
    }
  },
  async changeCourseStatus(req, res) {
    try {
      const courseId = req.params.courseId;
      const response = await Course.findByPk(courseId);
      response.status = "Public";
      await response.save();
      res.send("Success");
    } catch (err) {
      res.status(400).send({
        error: "Failed when get course information",
      });
    }
  },
};
