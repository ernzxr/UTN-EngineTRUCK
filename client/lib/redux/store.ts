import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import manufacturersSlice from './features/manufacturersSlice';
import brandsSlice from "./features/brandsSlice";
import enginesSlice from "./features/enginesSlice";
import mediaSlice from "./features/mediaSlice";
import componentsSlice from "./features/componentsSlice";
import featuresSlice from "./features/featuresSlice";
import featureDetailsSlice from "./features/featureDetailsSlice";
import compatibleComponentsSlice from "./features/compatibleComponentsSlice";

const store = configureStore({
  reducer: {
    manufacturersReducers:manufacturersSlice,
    brandsReducers:brandsSlice,
    enginesReducers:enginesSlice,
    mediaReducers:mediaSlice,
    componentsReducers:componentsSlice,
    featuresReducers:featuresSlice,
    compatibleComponentsReducers:compatibleComponentsSlice,
    featureDetailsReducers:featureDetailsSlice,
    /*
    usersReducers:usersSlice,
    */
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;