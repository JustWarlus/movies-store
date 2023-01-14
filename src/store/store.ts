import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../services";

export const store = configureStore({
  reducer: {
    // user: userReduser,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
