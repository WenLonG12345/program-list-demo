import { combineReducers, configureStore } from "@reduxjs/toolkit";
import programReducer from './programSlice';
import { useDispatch } from "react-redux";
import {
  persistReducer, 
  persistStore,   
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["program"], // <-- name root state to allow, e.g. state.user
};

const rootReducer = combineReducers({
  program: programReducer
})

export const store = configureStore({
  reducer: persistReducer<AppState>(persistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()