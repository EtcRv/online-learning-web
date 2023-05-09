module.exports = (sequelize, DataTypes) => {
  const Lecture = sequelize.define("Lecture", {
    video_url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Lecture.associate = (models) => {
    Lecture.hasOne(models.Discussion, {
      foreignKey: "lectureId",
    });
  };

  return Lecture;
};
