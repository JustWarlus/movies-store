import { useGetMovieByTitleQuery } from "services";
import { MovieList } from "../components";

export const HomePage = () => {
  const { data } = useGetMovieByTitleQuery("green");

  if (data) return <MovieList movies={data.Search} />;
  return <></>;
};
