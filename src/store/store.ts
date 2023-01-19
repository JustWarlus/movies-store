import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "services";

import favoriteReducer from "./favorite/favoriteSlice";
import searchReducer from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    // user: userReduser,
    [movieApi.reducerPath]: movieApi.reducer,
    favorites: favoriteReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
