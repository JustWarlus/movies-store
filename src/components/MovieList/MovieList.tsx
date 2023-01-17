import React from "react";
import { IMoviePosterAPI, IMovieInfoAPI } from "types/types";
import { MovieCard } from "../MovieCard";
import { StyledMovieList } from "./style";

interface IProps {
  movies: IMoviePosterAPI[] | IMovieInfoAPI[];
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
