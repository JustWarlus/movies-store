import { FavoriteEmpty, MovieList, SkeletonMovieCard } from "components";
import { useAppSelector } from "store";
import { useGetFilterQuery } from "services";
import { transformFilterApi } from "utilits";

export const SearchFilterPage = () => {
  const { searchFilterValue } = useAppSelector((state) => state.filter);
  const { data, isLoading, isFetching, isError } = useGetFilterQuery(searchFilterValue);

  if (isLoading) {
    [...new Array(8)].map((_, index) => {
      return <SkeletonMovieCard key={index} />;
    });
  }
  if (!data || isError) {
    return <FavoriteEmpty />;
  }

  const movies = transformFilterApi(data.docs);
  return <MovieList movies={movies} isLoading={isLoading} isFetching={isFetching} />;
};
