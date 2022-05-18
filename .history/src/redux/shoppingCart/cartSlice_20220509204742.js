import { createSelector } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const initialState = { value: items };

export const cartSlice = createSelector({
  name: "cartItems",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const duplicate = state.value.filter();

      if (duplicate.length > 0) {
        state.value = state.value.filter();
      }
    },
  },
});
const findItem = (arr, item) =>
  arr.filter(
    (e) => e.id === item.id && e.title === item.title && e.size === item.size
  );
const delItem = (arr, item) =>
  arr.filter(
    (e) => e.id !== item.id || e.title !== item.title || e.size !== item.size
  );
