import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { userAuthReducer } from "./reducers/authSlice";
import authAPI from "./rtk-queries/authAPI";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  auth: userAuthReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    persistedReducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(authAPI.middleware)
});

export default store;
