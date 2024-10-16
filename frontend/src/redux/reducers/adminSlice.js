import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredUsers: [],
  allCategories: [],
  categoryID: "",
  allBrands: [],
  brandID: "",
  allProducts: [],
  productID:""
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    filtered_users: (state, action) => {
      const { users, searchUser } = action.payload;
      const tempUsers = users?.filter(
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
    all_brands: (state, action) => {
      state.allBrands = action.payload;
    },
    brand_id: (state, action) => {
      state.brandID = action.payload;
    },
    all_products: (state, action) => {
      state.allProducts = action.payload;
    },
    product_id: (state, action) => {
      state.productID = action.payload;
    },
    resetAdminSlice: (state) => {
      state.filteredUsers = [];
      state.allCategories = [];
      state.categoryID = "";
      state.allBrands = [];
      state.brandID = "";
      state.allProducts = [];
      state.productID = "";
    },
  },
});

export const {
  filtered_users,
  all_categories,
  category_id,
  all_brands,
  brand_id,
  all_products,
  product_id,
  resetAdminSlice,
} = adminSlice.actions;

export const adminReducer = adminSlice.reducer;
