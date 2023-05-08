const { User, Student, Teacher } = require("../../models");

module.exports = {
  async getStudentInformation(req, res) {
    try {
      const id = req.params.id;
      const user = await Student.findOne({
        where: {
          userId: id,
        },
      });

      if (!user) {
        return res.status(403).send({
          error: "Do not exist that student",
        });
      }

      const userJson = user.toJSON();

      return res.send({
        userInfor: userJson,
      });
    } catch (err) {
      res.status(500).send({
        error: err,
      });
    }
  },
  async getTeacherInformation(req, res) {
    try {
      const id = req.params.id;

      const user = await Teacher.findOne({
        where: {
          userId: id,
        },
      });

      if (!user) {
        return res.status(403).send({
          error: "Do not exist that teacher",
        });
      }

      const userJson = user.toJSON();

      return res.send({
        userInfor: userJson,
      });
    } catch (err) {
      res.status(500).send({
        error: err,
      });
    }
  },
  async setStudentInformation(req, res) {
    try {
      const { userId } = req.body;
      await Student.update(req.body, {
        where: {
          userId: userId,
        },
      });

      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: err,
      });
    }
  },
  async setTeacherInformation(req, res) {
    try {
      const { userId } = req.body;
      await Teacher.update(req.body, {
        where: {
          userId: userId,
        },
      });

      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: err,
      });
    }
  },
};
