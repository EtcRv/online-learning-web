module.exports = (sequelize, DataTypes) => {
  const Discussion = sequelize.define("Discussion", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lecture_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    time: {
      type: "TIMESTAMP",
      allowNull: false,
    },
  });

  return Discussion;
};
