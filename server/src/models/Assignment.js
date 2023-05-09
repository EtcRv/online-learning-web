module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define("Assignment", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    attached_files: {
      type: DataTypes.STRING,
    },
  });

  Assignment.associate = (models) => {
    Assignment.hasOne(models.Assignment_Submission, {
      foreignKey: "assignmentId",
    });
  };
  return Assignment;
};
