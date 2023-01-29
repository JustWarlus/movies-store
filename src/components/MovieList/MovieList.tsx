import { SkeletonMovieCard } from "components";
import { IMoviePosterAPI, IMovieInfoAPI } from "types";
import { MovieCard } from "components";
import { StyledMovieList } from "./style";

interface IFilter {
  imdbID: string;
}

interface IProps {
  movies: IMoviePosterAPI[] | IMovieInfoAPI[] | IFilter[];
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
