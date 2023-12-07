import { configureStore } from "@reduxjs/toolkit";
import manufacturersSlice from './features/manufacturersSlice';
import brandsSlice from "./features/brandsSlice";

const store = configureStore({
  reducer: {
    manufacturers:manufacturersSlice,
    brands:brandsSlice
  }
});

export default store;