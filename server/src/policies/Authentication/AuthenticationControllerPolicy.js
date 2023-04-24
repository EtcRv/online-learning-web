const Joi = require("joi");

module.exports = {
  register(req, res, next) {
    const schema = Joi.object({
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string().regex(new RegExp("^[a-zA-Z0-9]{6,32}$")),
    });

    const { error } = schema.validate(req.body);

    if (error) {
      switch (error.details[0].context.key) {
        case "name":
          res.status(400).send({
            error: "You must provide a valid name",
          });
          break;
        case "email":
          res.status(400).send({
            error: "You must provide a valid email address.",
          });
          break;
        case "password":
          res.status(400).send({
            error: `The password provided failed to match the following rules:
                        <br>
                        1. It must contain ONLY the following characters: lower case, upper case, numeric.
                        <br>
                        2. It must be at least 6 characters in length and not greaterthan 32 characters.`,
          });
          break;
        default:
          res.status(400).send({
            error: "Invalid registratrion information",
          });
      }
    } else {
      next();
    }
  },
};
