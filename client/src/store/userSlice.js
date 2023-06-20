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
      console.log("user in state: ", user);
      state.user = user;
      if (Object.keys(user).length === 0) {
        console.log("Is Running");
        state.isLogin = false;
      } else {
        state.isLogin = true;
      }
    },
    addToken(state, action) {
      const { token } = action.payload;
      state.token = token;
    },
  },
});

export const { updateUser, addToken } = userSlice.actions;

export default userSlice.reducer;
