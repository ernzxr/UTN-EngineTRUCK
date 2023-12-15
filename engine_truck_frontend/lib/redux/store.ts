import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import manufacturersSlice from './features/manufacturersSlice';
import brandsSlice from "./features/brandsSlice";
import enginesSlice from "./features/enginesSlice";

const store = configureStore({
  reducer: {
    manufacturersReducers:manufacturersSlice,
    brandsReducers:brandsSlice,
    enginesReducers:enginesSlice,
    /*componentsReducers:componentsSlice,
    featureDetailsReducers:featureDetailsSlice,
    featuresReducers:featuresSlice,
    mediaReducers:mediaSlice,
    usersReducers:usersSlice,
    compatibleComponentsReducers:compatibleComponentsSlice*/
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;