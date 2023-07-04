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
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      money: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
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

  User.associate = (models) => {
    User.hasOne(models.Student, {
      foreignKey: "userId",
    });
    User.hasOne(models.Teacher, {
      foreignKey: "userId",
    });
    User.hasMany(models.Discussion, {
      foreignKey: "userId",
    });
    User.hasOne(models.Enroll, {
      foreignKey: "userId",
    });
    User.hasOne(models.Cart, {
      foreignKey: "userId",
    });
    User.hasMany(models.Feedback, {
      foreignKey: "userId",
    });
  };

  User.prototype.hashPassword = function hashNewPassword(password) {
    const SALT_FACTOR = 8;
    return bcrypt
      .genSaltAsync(SALT_FACTOR)
      .then((salt) => bcrypt.hashAsync(password, salt, null))
      .then((hash) => {
        return hash;
      });
  };

  User.prototype.comparePassword = function comparePassword(password) {
    return bcrypt.compareAsync(password, this.password);
  };

  return User;
};
