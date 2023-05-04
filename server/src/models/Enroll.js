module.exports = (sequelize, DataTypes) => {
  const Enroll = sequelize.define("Enroll", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Enroll;
};
