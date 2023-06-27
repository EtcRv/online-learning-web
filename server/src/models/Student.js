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
    Student.hasMany(models.Assignment_Submission, {
      foreignKey: "studentId",
    });

    Student.hasMany(models.Lecture_Status, {
      foreignKey: "studentId",
    });
  };

  return Student;
};
