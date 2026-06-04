import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");

const initialState = {
  isLoggedIn: !!storedUser,
  user: storedUser ? JSON.parse(storedUser) : null,
};

const userSlice = createSlice({
  name: "user",

  initialState,

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

    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(state.user)
      );
    },

    addAddress: (state, action) => {
      state.user.address = [
        ...(state.user.address || []),
        action.payload,
      ];

      localStorage.setItem(
        "user",
        JSON.stringify(state.user)
      );
    },

    removeAddress: (state, action) => {
      state.user.address =
        state.user.address.filter(
          (_, index) => index !== action.payload
        );

      localStorage.setItem(
        "user",
        JSON.stringify(state.user)
      );
    },
  },
});

export const {
  login,
  logout,
  updateUser,
  addAddress,
  removeAddress,
} = userSlice.actions;

export default userSlice.reducer;