import { configureStore } from "@reduxjs/toolkit";
import manufacturersSlice from './features/manufacturersSlice';
import brandsSlice from "./features/brandsSlice";

const store = configureStore({
  reducer: {
    manufacturersCRUD:manufacturersSlice,
    brandsCRUD:brandsSlice,
    /*componentsCRUD:componentsSlice,
    enginesCRUD:enginesSlice,
    featureDetailsCRUD:featureDetailsSlice,
    featuresCRUD:featuresSlice,
    mediaCRUD:mediaSlice,
    usersCRUD:usersSlice,
    compatibleComponentsCRUD:compatibleComponentsSlice*/
  }
});

export default store;