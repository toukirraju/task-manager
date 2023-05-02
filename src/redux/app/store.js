import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import filterSlice from "../featuers/filter/filterSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
