import { SkeletonMovieCard } from "components";
import { IMoviePosterAPI, IMovieInfoAPI } from "types";
import { MovieCard } from "components";
import { StyledMovieList } from "./style";
import { memo } from "react";
interface IFilter {
  imdbID: string;
}

interface IProps {
  movies: IMoviePosterAPI[] | IMovieInfoAPI[] | IFilter[];
  isLoading: boolean;
  isFetching?: boolean;
}

export const MovieList = memo(({ movies, isLoading, isFetching }: IProps) => {
  if (isLoading || isFetching) {
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
});
