import React from "react";
import { MovieCard } from "../MovieCard";
import { StyledMovieList } from "./style";

export const MovieList = () => {
  return (
    <StyledMovieList>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </StyledMovieList>
  );
};
