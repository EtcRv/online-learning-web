module.exports = (sequelize, DataTypes) => {
  const Lecture_Status = sequelize.define("Lecture_Status", {
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  });

  return Lecture_Status;
};
