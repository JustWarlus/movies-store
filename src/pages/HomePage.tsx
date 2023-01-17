import { useGetMovieByTitleQuery } from "services";
import { MovieList, SkeletonMovieCard } from "../components";

export const HomePage = () => {
  const { data, isLoading } = useGetMovieByTitleQuery("green");
  if (isLoading) {
    [...new Array(8)].map((_, index) => {
      return <SkeletonMovieCard key={index} />;
    });
  }
  if (data) return <MovieList movies={data.Search} />;
  return <></>;
};
