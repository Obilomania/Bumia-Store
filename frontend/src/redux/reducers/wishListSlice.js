import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  wishList: [],
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    WISHLIST_ITEMS: (state, action) => {
      state.wishList = action.payload;
    },
    ADD_TO_WISHLIST: (state, action) => {
        const product = action.payload;
      // Check if product already exists in wishlist
      const existingProduct = state.wishList.find(
        (item) => item._id === product._id
      );
      if (!existingProduct) {
        state.wishList.push(product);
        toast.success(`${action.payload.title} Added to wishList`);
      } else {
        state.wishList = state.wishList.filter(
          (item) => item._id !== product._id
        );
        toast.error(`${action.payload.title} Removed from wishList`);
      }
    },
    REMOVE_FROM_WISHLIST: (state, action) => {
      const productId = action.payload;
      state.wishList = state.wishList.filter((item) => item._id !== productId._id);
      toast.error(`${action.payload.title} Removed from wishList`);
    },
  },
});

export const { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, WISHLIST_ITEMS } =
  wishListSlice.actions;

export const wishListReducer = wishListSlice.reducer;
