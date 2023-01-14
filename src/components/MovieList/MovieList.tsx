import React from "react";
import { IMoviePosterAPI } from "types/types";
import { MovieCard } from "../MovieCard";
import { StyledMovieList } from "./style";

interface IProps {
  movies: IMoviePosterAPI[];
}

export const MovieList = ({ movies }: IProps) => {
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieCard key={movie.imdbID} movie={movie} />;
      })}
    </StyledMovieList>
  );
};
