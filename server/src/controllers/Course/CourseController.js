const {
  Course,
  Teacher,
  Section,
  Lecture,
  Enroll,
  User,
  Feedback,
} = require("../../models");

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

        await Course.update(updatedData, {
          where: {
            id: courseId,
          },
        });
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
      const courseJson = course.toJSON();
      if (
        courseJson.learning_object !== "" &&
        courseJson.required_skills !== "" &&
        courseJson.course_for !== "" &&
        courseJson.title !== "" &&
        courseJson.sub_title !== "" &&
        courseJson.course_description !== "" &&
        courseJson.language !== "" &&
        courseJson.level !== "" &&
        courseJson.category !== "" &&
        courseJson.primarily_taught !== "" &&
        courseJson.course_image !== "" &&
        courseJson.price >= 0 &&
        courseJson.welcome_message !== "" &&
        courseJson.congratulation_message !== ""
      ) {
        await course.update(
          { status: "Public" },
          {
            where: {
              id: courseId,
            },
          }
        );
        await course.save();
      }

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
      const { allSections } = req.body;

      allSections.map(async (section, idx) => {
        if (!Number.isInteger(Number(section.id))) {
          const newSection = await Section.create({
            name: section.name,
          });
          newSection.courseId = courseId;
          await newSection.save();
        } else {
          await Section.update(
            { name: section.name },
            {
              where: {
                id: section.id,
              },
            }
          );
        }
      });

      res.send({
        status: "Update Successful",
      });
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
      const { allLectures } = req.body;

      allLectures.map(async (lecture, idx) => {
        if (!Number.isInteger(Number(lecture.id))) {
          const newLecture = await Lecture.create({
            name: lecture.name,
            video_url: lecture.video_url,
          });
          newLecture.sectionId = lecture.sectionId;
          newLecture.courseId = courseId;
          await newLecture.save();
        } else {
          await Lecture.update(
            { name: lecture.name, video_url: lecture.video_url },
            {
              where: {
                id: lecture.id,
              },
            }
          );
        }
      });
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
      const allCourses = await Course.findAll();
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
<<<<<<< HEAD
  async createNewFeedback(req, res) {
    try {
      const { courseId, studentId, feedbackDescription, rating, time } = req.body;
  
      // Tạo feedback mới
      const feedback = await Feedback.create({
        courseId,
        studentId,
        feedbackDescription,
        rating,
        time,
      });
  
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
      const { courseId } = req.params;
  
      // Tìm các feedback có courseId tương ứng trong cơ sở dữ liệu
      const feedbacks = await Feedback.find({ courseId });
  
      res.send({
        feedbacks,
      });
    } catch (err) {
      console.log('err:', err);
      res.status(400).send({
        error: 'Failed to get feedbacks by courseId',
      });
    }
  },
  
=======
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
      });

      res.send("Buy Successfully");
    } catch (err) {
      console.log("error: ", err);
      res.status(400).send({
        error: "Failed when get course information",
      });
    }
  },
>>>>>>> 3cf7e2436714074742e0914420acb6696f04926a
};
