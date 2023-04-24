module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("Course", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teacher_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Course;
};
