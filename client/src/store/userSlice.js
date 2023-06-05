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
      if (user === {}) {
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
