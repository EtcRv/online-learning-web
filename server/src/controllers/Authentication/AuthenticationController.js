const { User, Student, Teacher } = require("../../models");
const config = require("../../config/config");
const jwt = require("jsonwebtoken");

function jwtSignUp(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      const userJson = user.toJSON();

      if (req.body.user_type === "student") {
        const student = await Student.create({
          name: user.name,
          description: "",
          phone: "",
          mail: user.email,
          userId: user.id,
        });
      } else {
        const teacher = await Teacher.create({
          name: user.email,
          description: "Empty",
          phone: "Empty",
          mail: user.email,
          userId: user.id,
        });
      }

      res.send({
        status: "Register successful",
      });
    } catch (err) {
      console.log("err: ", err);
      res.status(400).send({
        error: "This email account is already in use",
      });
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.status(403).send({
          error: "The login information was incorrect ",
        });
      }

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return res.status(403).send({
          error: "Email or password were wrong",
        });
      }

      const userJson = user.toJSON();

      return res.send({
        user: userJson,
        token: jwtSignUp(userJson),
      });
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to log in",
      });
    }
  },
  async checkTeacherLoginFirstTime(req, res) {
    try {
      const userId = req.params.id;
      const userInfo = await Teacher.findOne({
        where: {
          userId: userId,
        },
      });

      if (!userInfo) {
        res.status(400).send({
          error: "User do not in database",
        });
      }

      const userJson = userInfo.toJSON();
      if (userJson.description === "Empty" && userJson.phone === "Empty") {
        return res.send({
          firstTimeLogin: true,
        });
      }

      return res.send({
        firstTimeLogin: false,
      });
    } catch (err) {
      res.status(500).send({
        error: "An error has occured trying to log in",
      });
    }
  },
  async changePassword(req, res) {
    try {
      const { userId } = req.body;
      const { oldPassword, newPassword } = req.body;

      const user = await User.findOne({
        where: {
          id: userId,
        },
      });

      const isPasswordValid = await user.comparePassword(oldPassword);

      if (!isPasswordValid) {
        return res.status(403).send({
          error: "Password you entered is wrong",
        });
      }

      const hashPassword = await user.hashPassword(newPassword);

      const userUpdate = await User.update(
        { password: hashPassword },
        {
          where: {
            id: userId,
          },
        }
      );

      return res.send({
        status: "Update success",
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(500).send({
        error: err,
      });
    }
  },

  async closeAccount(req, res) {
    try {
      console.log("req.body: ", req.body);
      const { userId, password, user_type } = req.body;

      const user = await User.findOne({
        where: {
          id: userId,
        },
      });

      const isPasswordValid = await user.comparePassword(password);

      if (!isPasswordValid) {
        return res.status(403).send({
          error: "Password you entered is wrong",
        });
      }

      if (user_type === "student") {
        const student = await Student.findOne({
          where: {
            userId: userId,
          },
        });

        await student.destroy();
      } else {
        const teacher = await Teacher.findOne({
          where: {
            userId: userId,
          },
        });
        await teacher.destroy();
      }
      await user.destroy();
      return res.send({
        status: "Delete account successfully",
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(500).send({
        error: err,
      });
    }
  },
  async genNewPassword(req, res) {
    try {
      const { email, newPassword } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });

      const hashPassword = await user.hashPassword(newPassword);

      const userUpdate = await User.update(
        { password: hashPassword },
        {
          where: {
            id: user.id,
          },
        }
      );

      return res.send({
        status: "Update success",
      });
    } catch (err) {
      console.log("error: ", err);
      res.status(500).send({
        error: err,
      });
    }
  },
};
