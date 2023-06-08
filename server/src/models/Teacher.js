module.exports = (sequelize, DataTypes) => {
  const Teacher = sequelize.define("Teacher", {
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar_url: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:
        "https://img.freepik.com/premium-vector/avatar-user-icon-vector_97886-15026.jpg?size=626&ext=jpg",
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Teacher.associate = (models) => {
    Teacher.hasMany(models.Course, {
      foreignKey: "teacherId",
    });
  };

  return Teacher;
};
