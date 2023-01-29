import { MovieList } from "components";
import { useGetMovieByTitleQuery } from "services";
import { useAppSelector } from "store";

export const SearchPage = () => {
  const { searchValue } = useAppSelector((state) => state.search);
  const { data, isLoading } = useGetMovieByTitleQuery({ title: searchValue });

  if (data?.Response === "False" || !data) {
    return <div>ничего нет</div>;
  }
  return <MovieList movies={data.Search} isLoading={isLoading} />;
};
