import { configureStore } from "@reduxjs/toolkit";
import programReducer from './programSlice';
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    program: programReducer
    // user
  }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()