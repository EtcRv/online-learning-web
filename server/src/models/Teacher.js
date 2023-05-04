module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define("Teacher", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Teacher.associate = (models) => {
    Teacher.hasOne(models.Course, {
      foreignKey: "teacherId",
    });
  };

  return Teacher;
};
