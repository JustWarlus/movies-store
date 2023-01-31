import { MovieList } from "components";
import { useAppSelector } from "store";
import { useGetFilterQuery } from "services";
import { transformFilterApi } from "utilits";

export const SearchFilterPage = () => {
  const { searchFilterValue } = useAppSelector((state) => state.filter);
  const { data, isLoading, isFetching } = useGetFilterQuery(searchFilterValue);
  if (data) {
    const movies = transformFilterApi(data.docs);
    return <MovieList movies={movies} isLoading={isLoading} isFetching={isFetching} />;
  }
  return <></>;
};
