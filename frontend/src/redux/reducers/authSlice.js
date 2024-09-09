import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  cart: null,
  wishList: null,
  address: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    user_firstName: (state, action) => {
      state.firstName = action.payload;
    },
    user_lastName: (state, action) => {
      state.lastName = action.payload;
    },
    user_email: (state, action) => {
      state.email = action.payload;
    },
    user_phone: (state, action) => {
      state.phone = action.payload;
    },
    user_cart: (state, action) => {
      state.cart = action.payload;
    },
    user_wishList: (state, action) => {
      state.wishList = action.payload;
      },
    user_address: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { user_firstName, user_lastName, user_email, user_phone, user_cart, user_wishList, user_address } =
  authSlice.actions;

export const userAuthReducer = authSlice.reducer;
