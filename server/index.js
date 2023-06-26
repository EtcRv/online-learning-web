const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const config = require("./src/config/config");
const { sequelize } = require("./src/models");
const { User } = require("./src/models");
// const io = require("socket.io")(8080, {
//   cors: {
//     origin: "http://localhost:3000",
//   },
// });

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

// let users = [];
// io.on("connection", (socket) => {
//   console.log("User connected", socket.id);
//   socket.on("addUser", (userId) => {
//     const isUserExist = users.find((user) => user.userId === userId);
//     if (!isUserExist) {
//       const user = { userId, socketId: socket.id };
//       users.push(user);
//       io.emit("getUsers", users);
//     }
//   });

//   socket.on(
//     "sendMessage",
//     async ({ senderId, receiverId, message, conversationId }) => {
//       const receiver = users.find((user) => user.userId === receiverId);
//       const sender = users.find((user) => user.userId === senderId);
//       const user = await User.findByPk(senderId);
//       console.log("sender :>> ", sender, receiver);
//       if (receiver) {
//         io.to(receiver.socketId)
//           .to(sender.socketId)
//           .emit("getMessage", {
//             senderId,
//             message,
//             conversationId,
//             receiverId,
//             user: { id: user.id, name: user.name, email: user.email },
//           });
//       } else {
//         io.to(sender.socketId).emit("getMessage", {
//           senderId,
//           message,
//           conversationId,
//           receiverId,
//           user: { id: user.id, name: user.name, email: user.email },
//         });
//       }
//     }
//   );

//   socket.on("disconnect", () => {
//     users = users.filter((user) => user.socketId !== socket.id);
//     io.emit("getUsers", users);
//   });
//   // io.emit('getUsers', socket.userId);
// });

require("./src/routes")(app);

sequelize.sync({ force: false }).then(() => {
  app.listen(config.port);
  console.log(`Server start on port ${config.port}`);
});
