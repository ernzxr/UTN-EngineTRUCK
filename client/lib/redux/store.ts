import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import manufacturersSlice from './features/manufacturersSlice';
import brandsSlice from "./features/brandsSlice";
import enginesSlice from "./features/enginesSlice";
import mediaSlice from "./features/mediaSlice";
import componentsSlice from "./features/componentsSlice";

const store = configureStore({
  reducer: {
    manufacturersReducers:manufacturersSlice,
    brandsReducers:brandsSlice,
    enginesReducers:enginesSlice,
    mediaReducers:mediaSlice,
    componentsReducers:componentsSlice,
    /*featureDetailsReducers:featureDetailsSlice,
    featuresReducers:featuresSlice,
    usersReducers:usersSlice,
    compatibleComponentsReducers:compatibleComponentsSlice*/
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;