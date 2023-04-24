module.exports = (sequelize, DataTypes) => {
  const Lecture = sequelize.define("Lecture", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    course_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    video_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Lecture;
};
