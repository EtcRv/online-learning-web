module.exports = (sequelize, DataTypes) => {
  const Lecture = sequelize.define("Lecture", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    video_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Lecture.associate = (models) => {
    Lecture.hasOne(models.Lecture_Status, {
      foreignKey: "lectureId",
    });
  };

  return Lecture;
};
