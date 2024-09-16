import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredUsers: [],
  allCategories: [],
  categoryID : ""
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    filtered_users: (state, action) => {
      const { users, searchUser } = action.payload;
      const tempUsers = users.filter(
        (user) =>
          user.name?.toLowerCase().includes(searchUser?.toLowerCase()) ||
          user.email?.toLowerCase().includes(searchUser?.toLowerCase())
      );
      state.filteredUsers = tempUsers;
    },
    all_categories: (state, action) => {
      state.allCategories = action.payload;
    },
    category_id: (state, action) => {
      state.categoryID = action.payload;
    },
  },
});

export const { filtered_users, all_categories,category_id } = adminSlice.actions;

export const adminReducer = adminSlice.reducer;
