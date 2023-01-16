import { MovieCard } from "components/MovieCard";
import { movieApi } from "services";
import { IMovieInfoAPI } from "types/types";
import { StyledRecomendation, Title, MovieList } from "./style";

interface IProps {
  movie: IMovieInfoAPI;
}

export const Recomendation = ({ movie }: IProps) => {
  const { data, isError, isSuccess } = movieApi.useGetMovieByTitleQuery(
    movie.Title.split(" ").at(-1),
  );
  if (isSuccess) {
    return (
      <StyledRecomendation>
        <Title>Recomendation</Title>
        <MovieList>
          {data.Search.map((movieItem) => {
            if (movieItem.imdbID !== movie.imdbID)
              return <MovieCard key={movieItem.imdbID} movie={movieItem} />;
          })}
        </MovieList>
      </StyledRecomendation>
    );
  }
  return <></>;
};
