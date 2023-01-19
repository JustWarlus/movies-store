import { SkeletonMovieCard } from "components/SkeletonMovieCard";
import React from "react";
import { IMoviePosterAPI, IMovieInfoAPI } from "types/types";
import { MovieCard } from "../MovieCard";
import { StyledMovieList } from "./style";

interface IProps {
  movies: IMoviePosterAPI[] | IMovieInfoAPI[];
  isLoading: boolean;
}

export const MovieList = ({ movies, isLoading }: IProps) => {
  if (isLoading) {
    [...new Array(8)].map((_, index) => {
      return <SkeletonMovieCard key={index} />;
    });
  }
  return (
    <StyledMovieList>
      {movies.map((movie) => {
        return <MovieCard key={movie.imdbID} movie={movie} />;
      })}
    </StyledMovieList>
  );
};
