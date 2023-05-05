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
          name: "",
          description: "",
          phone: "",
          mail: "",
          userId: user.id,
        });
      } else {
        const teacher = await Teacher.create({
          name: "",
          description: "",
          phone: "",
          mail: "",
          userId: user.id,
        });
      }

      res.send({
        user: userJson,
        token: jwtSignUp(userJson),
      });
    } catch (err) {
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
      const { userId } = req.body;
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

      if (
        userInfo.name === "" &&
        userInfo.description === "" &&
        userInfo.phone === "" &&
        userInfo.mail === ""
      ) {
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
};
