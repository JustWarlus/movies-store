import { MovieList } from "components";
import { getTrendsMovies } from "helpers";
import { IMovieInfoAPI } from "types";

export const TrendsPage = () => {
  const data = getTrendsMovies() as IMovieInfoAPI[];
  return <MovieList movies={data} isLoading={false} />;
};
