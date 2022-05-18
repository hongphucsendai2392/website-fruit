import { createSlice } from "@reduxjs/toolkit";
const idUser =
  localStorage.getItem("idUsers") !== null
    ? JSON.parse(localStorage.getItem("idUsers"))
    : [];
const initialState = { value: idUser };

export const user = createSlice({
  name: "idUsers",
  initialState,
  reducers: {
    setId: (state, action) => {
      const newIdUser = action.payload;
      state.value = [
        ...state.value,
        {
          ...newIdUser,
        },
      ];
      localStorage.setItem("idUsers", JSON.stringify(state.value));
    },
  },
});
