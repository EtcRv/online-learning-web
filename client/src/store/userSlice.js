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
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isLogin = true;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
