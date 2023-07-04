module.exports = (sequelize, DataTypes) => {
  const Discussion = sequelize.define("Discussion", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Discussion;
};
