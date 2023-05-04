module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Student.associate = (models) => {
    Student.hasOne(models.Feedback, {
      foreignKey: "studentId",
    });
    Student.hasOne(models.Enroll, {
      foreignKey: "studentId",
    });
    Student.hasOne(models.Assignment_Submission, {
      foreignKey: "studentId",
    });
  };

  return Student;
};
