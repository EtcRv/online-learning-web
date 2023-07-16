import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  token: "",
  isLogin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser(state, action) {
      const { user } = action.payload;
      state.user = user;
      if (Object.keys(user).length === 0) {
        state.isLogin = false;
      } else {
        state.isLogin = true;
      }
    },
    addToken(state, action) {
      const { token } = action.payload;
      state.token = token;
    },
    updateMoney(state, action) {
      const { newMoney } = action.payload;
      state.user.money = newMoney;
    },
  },
});

export const { updateUser, addToken, updateMoney } = userSlice.actions;

export default userSlice.reducer;
