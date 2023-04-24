module.exports = (sequelize, DataTypes) => {
  const Assignment = sequelize.define("Assignment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
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

  return Assignment;
};
