module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define("Message", {
    sendId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    receiveId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Message;
};
