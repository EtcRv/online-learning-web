const Promise = require("bluebird");
const bcrypt = Promise.promisifyAll(require("bcrypt-nodejs"));

async function hashPassword(user) {
  const SALT_FACTOR = 8;
  if (!user.changed("password")) {
    return;
  }

  return bcrypt
    .genSaltAsync(SALT_FACTOR)
    .then((salt) => bcrypt.hashAsync(user.password, salt, null))
    .then((hash) => {
      user.setDataValue("password", hash);
    });
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_type: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: hashPassword,
        beforeUpdate: hashPassword,
      },
    }
  );

  User.prototype.comparePassword = function comparePassword(password) {
    return bcrypt.compareAsync(password, this.password);
  };

  return User;
};
