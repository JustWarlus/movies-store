import { ImbdIcon } from "assets";
import { BadgeRating } from "components/BadgeRating";
import { Recomendation } from "components/Recomendation";
import { IMovieInfoAPI, TableInfoKey } from "types/types";
import {
  Movie,
  MovieInfo,
  MovieSidbar,
  Poster,
  Title,
  Categories,
  CategoryItem,
  Badges,
  BadgeItem,
  Description,
  Table,
  TableRow,
  TableRowName,
  TableRowValue,
} from "./style";

interface IProps {
  movie: IMovieInfoAPI;
}

const tableInfo: TableInfoKey[] = [
  "Year",
  "Released",
  "BoxOffice",
  "Country",
  "Production",
  "Actors",
  "Director",
  "Writer",
];

export const MovieDetails = ({ movie }: IProps) => {
  const genreMovie = movie.Genre.split(", ");
  return (
    <Movie>
      <MovieSidbar>
        <Poster src={movie.Poster} alt={movie.Title} />
      </MovieSidbar>
      <MovieInfo>
        <Categories>
          {genreMovie.map((genre) => {
            return <CategoryItem key={genre}>{genre}</CategoryItem>;
          })}
        </Categories>
        <Title>{movie.Title}</Title>
        <Badges>
          <BadgeRating rating={movie.imdbRating} />
          <BadgeItem>
            <ImbdIcon />
            {movie.imdbRating}
          </BadgeItem>
          <BadgeItem>{movie.Runtime}</BadgeItem>
        </Badges>
        {movie.Plot !== "N/A" && <Description>{movie.Plot}</Description>}
        <Table>
          {tableInfo.map((parametr) => {
            if (movie[parametr] !== "N/A" && movie[parametr] !== undefined) {
              return (
                <TableRow>
                  <TableRowName>{parametr}</TableRowName>
                  <TableRowValue>{`${movie[parametr]}`}</TableRowValue>
                </TableRow>
              );
            }
          })}
        </Table>
        <Recomendation movie={movie} />
      </MovieInfo>
    </Movie>
  );
};
