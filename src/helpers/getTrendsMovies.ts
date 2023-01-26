import { trendsMovies } from "data";
import { useGetOneMovieByTitleQuery } from "services";

export const getTrendsMovies = () => {
  const trendsMoviesData = trendsMovies.map((movieName) => {
    const { data, isSuccess } = useGetOneMovieByTitleQuery(movieName);
    if (isSuccess) return data;
  });
  if (!trendsMoviesData.includes(undefined)) {
    return trendsMoviesData;
  }
  return [];
};
