import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "services";

import favoriteReducer from "./favorite/favoriteSlice";
import searchReducer from "./search/searchSlice";
import accountReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    favorites: favoriteReducer,
    search: searchReducer,
    account: accountReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
