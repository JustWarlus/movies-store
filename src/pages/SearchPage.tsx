import { MovieList, SkeletonMovieCard } from "components";
import { useGetMovieByTitleQuery } from "services";
import { useAppSelector } from "store/hooks/hooks";
import { useState } from "react";

export const SearchPage = () => {
  const [page, setPage] = useState(1);
  const { searchValue } = useAppSelector((state) => state.search);
  const { data, isLoading } = useGetMovieByTitleQuery({ title: searchValue, page: page });

  if (data?.Response === "False" && data) {
    return <div>ничего нет</div>;
  }
  if (data) return <MovieList movies={data.Search} isLoading={isLoading} />;
  return <></>;
};
