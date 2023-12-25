import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { baseApi } from "./api/baseApi";
import userReducer from "./features/userSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  api: baseApi.reducer,
  user: persistReducer(persistConfig, userReducer),
});
