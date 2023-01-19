import { MovieList, SkeletonMovieCard } from "components";
import { useGetMovieByTitleQuery } from "services";
import { useAppSelector } from "store/hooks/hooks";

export const SearchPage = () => {
  const { searchValue } = useAppSelector((state) => state.search);
  const { data, isLoading } = useGetMovieByTitleQuery(searchValue);

  if (data?.Response === "False" && data) {
    return <div>ничего нет</div>;
  }
  if (data) return <MovieList movies={data.Search} isLoading={isLoading} />;
  return <></>;
};
