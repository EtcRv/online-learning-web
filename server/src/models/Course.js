module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    learning_object: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    required_skills: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    course_for: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "New Course",
    },
    sub_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    course_description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    primarily_taught: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    course_image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "https://s.udemycdn.com/course/750x422/placeholder.jpg",
    },
    promotional_video: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    welcome_message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    congratulation_message: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Draft",
    },
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 5,
    },
    sale: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Course.associate = (models) => {
    Course.hasMany(models.Assignment, {
      foreignKey: "courseId",
    });

    Course.hasOne(models.Enroll, {
      foreignKey: "courseId",
    });

    Course.hasOne(models.Cart, {
      foreignKey: "courseId",
    });

    Course.hasMany(models.Lecture, {
      foreignKey: "courseId",
    });

    Course.hasMany(models.Feedback, {
      foreignKey: "courseId",
    });

    Course.hasMany(models.Section, {
      foreignKey: "courseId",
    });
    Course.hasMany(models.Discussion, {
      foreignKey: "courseId",
    });
  };

  return Course;
};
