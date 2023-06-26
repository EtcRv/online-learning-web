const { Cart, Course, User, Teacher } = require("../../models");

module.exports = {
  async getCourseInCart(req, res) {
    try {
      const userId = req.params.userId;
      const allCarts = await Cart.findAll({
        where: {
          userId: userId,
        },
      });

      const coursesData = Promise.all(
        allCarts.map(async (cart) => {
          const course = await Course.findByPk(cart.courseId);
          const teacher = await Teacher.findByPk(course.teacherId);
          const user = await User.findByPk(teacher.userId);
          return {
            courseInformation: {
              id: course.id,
              image: course.course_image,
              name: course.title,
              teacherName: user.name,
              rating: course.rating,
              price: course.price,
            },
          };
        })
      );

      res.send(await coursesData);
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send({
        error: "Failed when create course",
      });
    }
  },
  async addCourseIntoCart(req, res) {
    try {
      const { userId, courseId } = req.body;
      const newCart = await Cart.create();
      newCart.userId = userId;
      newCart.courseId = courseId;
      await newCart.save();

      res.send("Add success");
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send({
        error: "Failed when create course",
      });
    }
  },
  async removeCourseFromCart(req, res) {
    try {
      const { userId, courseId } = req.body;
      const newCart = await Cart.findOne({
        where: {
          userId: userId,
          courseId: courseId,
        },
      });

      await newCart.destroy();

      res.send("Remove success");
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send({
        error: "Failed when create course",
      });
    }
  },
};
