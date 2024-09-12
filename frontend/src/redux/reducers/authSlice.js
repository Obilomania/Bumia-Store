import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  userRole: "",
  cart: null,
  wishList: null,
  address: null,
  loginStatus: false,
  isBlocked: false,
  memberSince: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    user_id: (state, action) => {
      state.id = action.payload;
    },
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
    user_role: (state, action) => {
      state.userRole = action.payload;
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
    user_auth_status: (state, action) => {
      state.loginStatus = action.payload;
    },
    user_isBlocked: (state, action) => {
      state.isBlocked = action.payload;
    },
    user_memberSince: (state, action) => {
      state.memberSince = action.payload;
    },
    
    resetUserState: (state) => {
      state.id = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.phone = "";
      state.userRole = "";
      state.cart = null;
      state.wishList = null;
      state.address = null;
      state.loginStatus = false;
      state.isBlocked = false;
      state.memberSince = null;
      state.filteredUsers = null;
    },
  },
});

export const {
  user_id,
  user_firstName,
  user_lastName,
  user_email,
  user_phone,
  user_cart,
  user_wishList,
  user_address,
  user_role,
  user_auth_status,
  user_isBlocked,
  user_memberSince,
  resetUserState,
} = authSlice.actions;

export const userAuthReducer = authSlice.reducer;
