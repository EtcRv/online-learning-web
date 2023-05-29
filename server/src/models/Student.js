module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar_url: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        "https://img.freepik.com/premium-vector/avatar-user-icon-vector_97886-15026.jpg?size=626&ext=jpg",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mail: {
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
