module.exports = (sequelize, DataTypes) => {
  const Assignment_Submission = sequelize.define("Assignment_Submission", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    assignment_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Assignment_Submission;
};
