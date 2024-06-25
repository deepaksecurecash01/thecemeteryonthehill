import { configureStore } from "@reduxjs/toolkit";
import theCemeteryReducer from "./slice";

export const store = configureStore({
  reducer: {
    theCemetery: theCemeteryReducer,
  },
});
