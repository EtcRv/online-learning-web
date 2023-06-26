const {
  Conversation,
  User,
  Teacher,
  Message,
  Student,
} = require("../../models");
const { Op } = require("sequelize");
module.exports = {
  async createConversation(req, res) {
    try {
      const { senderId, receiverId } = req.body;
      const newCoversation = await Conversation.create({
        firstMemberId: senderId,
        secondMemberId: receiverId,
      });
      res.status(200).send("Conversation created successfully");
    } catch (error) {
      console.log(error, "Error");
    }
  },
  async getAllUserConversation(req, res) {
    try {
      const userId = req.params.userId;
      const conversations = await Conversation.findAll({
        where: {
          [Op.or]: [{ firstMemberId: userId }, { secondMemberId: userId }],
        },
      });

      const conversationUserData = Promise.all(
        conversations.map(async (conversation) => {
          const receiverId =
            conversation.firstMemberId == userId
              ? conversation.secondMemberId
              : conversation.firstMemberId;
          const user = await User.findByPk(receiverId);
          if (user.user_type === "teacher") {
            const teacherInfo = await Teacher.findOne({
              where: {
                userId: receiverId,
              },
            });

            return {
              user: {
                receiverId: user.id,
                email: user.email,
                name: user.name,
                avatar_url: teacherInfo.avatar_url,
              },
              conversationId: conversation.id,
            };
          } else {
            const studentInfo = await Student.findOne({
              where: {
                userId: receiverId,
              },
            });
            return {
              user: {
                receiverId: user.id,
                email: user.email,
                name: user.name,
                avatar_url: studentInfo.avatar_url,
              },
              conversationId: conversation.id,
            };
          }
        })
      );
      res.status(200).json(await conversationUserData);
    } catch (error) {
      console.log(error, "Error");
    }
  },
  async createMessage(req, res) {
    try {
      const { conversationId, senderId, message, receiverId } = req.body;
      if (!senderId || !message)
        return res.status(400).send("Please fill all required fields");
      if (conversationId === "new" && receiverId) {
        const newCoversation = await Conversation.create({
          firstMemberId: senderId,
          secondMemberId: receiverId,
        });
        const newMessage = await Message.create({
          sendId: senderId,
          receiveId: receiverId,
          message: message,
        });
        newMessage.conversationId = newCoversation.id;
        await newMessage.save();
        return res.status(200).send("Message sent successfully");
      } else if (!conversationId && !receiverId) {
        return res.status(400).send("Please fill all required fields");
      }
      const newMessage = await Message.create({
        sendId: senderId,
        receiveId: receiverId,
        message: message,
      });
      newMessage.conversationId = conversationId;
      await newMessage.save();
      res.status(200).send("Message sent successfully");
    } catch (error) {
      console.log(error, "Error");
    }
  },
  async getMessage(req, res) {
    try {
      const checkMessages = async (conversationId) => {
        console.log("conversationId: ", conversationId);
        const messages = await Message.findAll({
          where: { conversationId: conversationId },
        });
        const messageUserData = Promise.all(
          messages.map(async (message) => {
            const user = await User.findByPk(message.sendId);
            return {
              user: {
                id: user.id,
                email: user.email,
                name: user.name,
              },
              message: message.message,
            };
          })
        );
        res.status(200).json(await messageUserData);
      };
      const conversationId = req.params.conversationId;
      if (conversationId === "new") {
        const checkConversation = await Conversation.findAll({
          where: {
            $or: [
              {
                firstMemberId: req.query.senderId,
                secondMemberId: req.query.receiverId,
              },
              {
                firstMemberId: req.query.receiverId,
                secondMemberId: req.query.senderId,
              },
            ],
          },
        });
        if (checkConversation.length > 0) {
          checkMessages(checkConversation[0].id);
        } else {
          return res.status(200).json([]);
        }
      } else {
        checkMessages(conversationId);
      }
    } catch (error) {
      console.log("Error", error);
    }
  },
};
