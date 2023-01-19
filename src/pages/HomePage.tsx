import { useGetMovieByTitleQuery } from "services";
import { MovieList, SkeletonMovieCard } from "../components";

export const HomePage = () => {
  const { data, isLoading } = useGetMovieByTitleQuery("green");

  if (data) return <MovieList movies={data.Search} isLoading={isLoading} />;
  return <></>;
};
