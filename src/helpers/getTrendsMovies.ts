import { trendsMovies } from "data";
import { useGetOneMovieByTitleQuery } from "services";

export const getTrendsMovies = () => {
  const trendsMoviesData = trendsMovies.map((movieName) => {
    const { data, isError } = useGetOneMovieByTitleQuery(movieName);
    if (isError) return null;
    return data;
  });
  if (!trendsMoviesData.includes(undefined)) {
    return trendsMoviesData;
  }
  return [];
};
