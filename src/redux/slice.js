import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      const newQuantity =
        action.payload.quantity || 1;

      if (existingItem) {
        existingItem.quantity += newQuantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: newQuantity,
        });
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;

      const item = state.items.find(
        (item) => item.id === id
      );

      if (item) {
        item.quantity = quantity;
      }

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem(
        "cart",
        JSON.stringify(state.items)
      );
    },

    clearAllItem: (state) => {
      state.items = [];

      localStorage.removeItem("cart");
    },
  },
});

export const {
  addItem,
  updateQuantity,
  removeItem,
  clearAllItem,
} = cartSlice.actions;

export default cartSlice.reducer;