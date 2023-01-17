import { MovieList } from "components";
import { getTrendsMovies } from "helpers/getTrendsMovies";
import { IMovieInfoAPI } from "types/types";

export const TrendsPage = () => {
  const data = getTrendsMovies() as IMovieInfoAPI[];
  return <MovieList movies={data} />;
};
