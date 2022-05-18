import { createSlice } from "@reduxjs/toolkit";
const idUser =
  localStorage.getItem("idUsers") !== null
    ? JSON.parse(localStorage.getItem("idUsers"))
    : [];
