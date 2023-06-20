module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define("Section", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Section.associate = (models) => {
    Section.hasMany(models.Lecture, {
      foreignKey: "sectionId",
    });
  };

  return Section;
};
