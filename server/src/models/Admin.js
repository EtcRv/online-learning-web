module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    course_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Admin;
};
