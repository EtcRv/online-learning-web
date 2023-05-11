module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Course.associate = (models) => {
    Course.hasMany(models.Admin, {
      foreignKey: "courseId",
    });

    Course.hasOne(models.Assignment, {
      foreignKey: "courseId",
    });

    Course.hasOne(models.Enroll, {
      foreignKey: "courseId",
    });

    Course.hasMany(models.Lecture, {
      foreignKey: "courseId",
    });

    Course.hasOne(models.Feedback, {
      foreignKey: "courseId",
    });
  };

  return Course;
};
