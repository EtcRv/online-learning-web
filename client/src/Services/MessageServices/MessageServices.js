import Api from "../Api";

const MessageServices = {
  getAllUserInConversation(userId) {
    return Api().get(`/api/conversations/${userId}`);
  },
  getMessage(conversationId, senderId, receiverId) {
    return Api().get(
      `/api/message/${conversationId}?senderId=${senderId}&&receiverId=${receiverId}`
    );
  },
  sendMessage(data) {
    return Api().post("/api/message", data);
  },
};

export default MessageServices;
