import { createSlice } from "@reduxjs/toolkit";
import { IMoviePosterAPI, LocalStorageKey, IMovieInfoAPI } from "types/types";

const initFavorite = () => {
  if (!localStorage.getItem(LocalStorageKey.FAVORITES)) {
    localStorage.setItem(LocalStorageKey.FAVORITES, JSON.stringify([]));
  }
  return JSON.parse(localStorage.getItem(LocalStorageKey.FAVORITES) as string);
};

interface IFavoriteState {
  favoriteMovies: (IMoviePosterAPI | IMovieInfoAPI)[];
}

const initialState: IFavoriteState = {
  favoriteMovies: initFavorite(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, { payload }) => {
      if (!state.favoriteMovies.find((movie) => movie.imdbID === payload.imdbID)) {
        state.favoriteMovies.push(payload);
      } else {
        const index = state.favoriteMovies.findIndex((movie) => movie.imdbID === payload.imdbID);
        state.favoriteMovies.splice(index, 1);
      }
      localStorage.setItem(LocalStorageKey.FAVORITES, JSON.stringify(state.favoriteMovies));
    },
  },
});

export default favoritesSlice.reducer;
export const { toggleFavorite } = favoritesSlice.actions;
