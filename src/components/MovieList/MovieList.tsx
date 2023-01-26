import { ButtonMore } from "components/ButtonMore";
import { SkeletonMovieCard } from "components/SkeletonMovieCard";
import React from "react";
import { IMoviePosterAPI, IMovieInfoAPI } from "types/types";
import { MovieCard } from "../MovieCard";
import { StyledMovieList, ButtonConainer } from "./style";

interface IProps {
  movies: IMoviePosterAPI[] | IMovieInfoAPI[];
  isLoading: boolean;
  onClickMore?: () => void;
}

export const MovieList = ({ movies, isLoading, onClickMore }: IProps) => {
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
      {onClickMore && (
        <ButtonConainer>
          <ButtonMore onClick={onClickMore} />
        </ButtonConainer>
      )}
    </StyledMovieList>
  );
};
