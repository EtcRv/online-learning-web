module.exports = (sequelize, DataTypes) => {
  const Conversation = sequelize.define("Conversation", {
    firstMemberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    secondMemberId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  Conversation.associate = (models) => {
    Conversation.hasOne(models.Message, {
      foreignKey: "conversationId",
    });
  };

  return Conversation;
};
