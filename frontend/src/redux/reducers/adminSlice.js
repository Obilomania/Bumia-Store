import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filteredUsers: [],
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
  },
});

export const {filtered_users} = adminSlice.actions

export const adminReducer = adminSlice.reducer