import { createSlice } from "@reduxjs/toolkit";

const savedUser = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: !!savedUser,
    user: savedUser || null,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;

      localStorage.setItem(
        "user",
        JSON.stringify(action.payload)
      );
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;

      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;