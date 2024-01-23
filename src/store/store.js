import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./cars/slice";
import { favReducer } from "./favoritesCars/slice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { catReducer } from "./categories/slice";

const persistConfig = {
  key: "favCars",
  storage,
};

const persistedReducer = persistReducer(persistConfig, favReducer);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
    favCars: persistedReducer,
    categories: catReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
