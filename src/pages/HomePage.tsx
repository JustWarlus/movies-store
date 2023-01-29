import { useGetMovieByTitleQuery } from "services";
import { ButtonMore, MovieList } from "components";
import { useState } from "react";
import { ButtonConainer } from "components/MovieList/style";

export const HomePage = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetMovieByTitleQuery({ title: "green", page: page });

  const setNewPage = () => {
    setPage((page) => page + 1);
  };

  if (data) {
    return (
      <div>
        <MovieList movies={data.Search} isLoading={isLoading} />

        <ButtonConainer>
          <ButtonMore onClick={setNewPage} />
        </ButtonConainer>
      </div>
    );
  }
  return <></>;
};
