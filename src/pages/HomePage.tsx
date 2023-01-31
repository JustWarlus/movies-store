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
  const setPrevPage = () => {
    if (page > 1) setPage((page) => page - 1);
  };

  if (data) {
    return (
      <div>
        <MovieList movies={data.Search} isLoading={isLoading} />

        <ButtonConainer>
          {page > 1 && <ButtonMore onClick={setPrevPage} label="Prev" />}
          <ButtonMore onClick={setNewPage} label="Next" />
        </ButtonConainer>
      </div>
    );
  }
  return <></>;
};
