import Api from "../Api";

const CartServices = {
  getCourseInCart(userId, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().get(`cart/get-course/${userId}`, { headers });
  },
  addCourseInCart(data, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post(`cart/add-course`, data, { headers });
  },
  removeCourseFromCart(data, token) {
    const headers = { Authorization: `Bearer ${token}` };
    return Api().post("cart/remove-course", data, { headers });
  },
};

export default CartServices;
