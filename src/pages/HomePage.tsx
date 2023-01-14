import { useGetMovieByTitleQuery } from "services";
import { TransformMoviePosters } from "utilits";

import { MovieList } from "../components";

export const HomePage = () => {
  const { data, isSuccess } = useGetMovieByTitleQuery("dog");

  if (data) return <MovieList movies={data.Search} />;
};
