import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./reducers/authSlice";
import authAPI from "./rtk-queries/authAPI";
import {orderReducer} from "./reducers/orderSlice";
import { adminReducer } from "./reducers/adminSlice";
import adminAPI from "./rtk-queries/adminAPI";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  auth: userAuthReducer,
  admin: adminReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    persistedReducer,
    order: orderReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [adminAPI.reducerPath]: adminAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(authAPI.middleware)
      .concat(adminAPI.middleware)
});

export default store;
