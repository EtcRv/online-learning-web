module.exports = (sequelize, DataTypes) => {
  const Feedback = sequelize.define("Feedback", {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    feedback_description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Feedback;
};
