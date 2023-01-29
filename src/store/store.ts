import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "services";
import { filtersApi } from "services/filtersApi/filterApi";

import favoriteReducer from "./favorite/favoriteSlice";
import searchReducer from "./search/searchSlice";
import accountReducer from "./auth/authSlice";
import filterReducer from "./filter/filterSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [filtersApi.reducerPath]: filtersApi.reducer,
    favorites: favoriteReducer,
    search: searchReducer,
    account: accountReducer,
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware, filtersApi.middleware]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
