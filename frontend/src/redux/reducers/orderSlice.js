import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredOrders: [],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    FILTER_PRODUCTS(state, action) {
      const { orders, search } = action.payload;
      const tempOrders = orders.filter(
        (order) =>
          order.customer?.toLowerCase().includes(search?.toLowerCase()) ||
          order.email?.toLowerCase().includes(search?.toLowerCase())
      );
      state.filteredOrders = tempOrders;
    },
    resetOrderState(state) {
      state.filteredOrders = [];
    },
  },
});

export const { FILTER_PRODUCTS, resetOrderState } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
