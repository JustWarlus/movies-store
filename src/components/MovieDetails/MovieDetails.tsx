import { FavoriteIcon, ImbdIcon, ShareIcon } from "assets";
import { BadgeRating } from "components";
import { Recomendation } from "components";
import { IMovieInfoAPI, TableInfoKey } from "types";
import { toggleFavorite } from "store";
import { useAppDispatch, useAppSelector } from "store";
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
  SubPanel,
  Buttom,
  TableBody,
} from "./style";
import { memo } from "react";
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

export const MovieDetails = memo(({ movie }: IProps) => {
  const genreMovie = movie.Genre.split(", ");

  const dispatch = useAppDispatch();
  const { favoriteMovies } = useAppSelector((state) => state.favorites);
  const isFavorite = favoriteMovies.find((movieState) => movieState.imdbID === movie.imdbID)
    ? true
    : false;
  const handleAddFavorite = () => {
    dispatch(toggleFavorite(movie));
  };

  return (
    <Movie>
      <MovieSidbar>
        <Poster src={movie.Poster} alt={movie.Title} />
        <SubPanel>
          <Buttom isFavorite={isFavorite} onClick={() => handleAddFavorite()}>
            <FavoriteIcon />
          </Buttom>
          <Buttom>
            <ShareIcon />
          </Buttom>
        </SubPanel>
      </MovieSidbar>
      <MovieInfo>
        <Categories>
          {genreMovie.map((genre) => {
            return <CategoryItem key={genre}>{genre}</CategoryItem>;
          })}
        </Categories>
        <Title>{movie.Title}</Title>
        <Badges>
          <BadgeRating movieTitle={movie.Title} rating={movie.imdbRating} />
          <BadgeItem>
            <ImbdIcon />
            {movie.imdbRating}
          </BadgeItem>
          <BadgeItem>{movie.Runtime}</BadgeItem>
        </Badges>
        {movie.Plot !== "N/A" && <Description>{movie.Plot}</Description>}
        <Table>
          <TableBody>
            {tableInfo.map((parametr) => {
              return (
                movie[parametr] !== "N/A" &&
                movie[parametr] !== undefined && (
                  <TableRow key={parametr}>
                    <TableRowName>{parametr}</TableRowName>
                    <TableRowValue>{`${movie[parametr]}`}</TableRowValue>
                  </TableRow>
                )
              );
            })}
          </TableBody>
        </Table>
        <Recomendation movie={movie} />
      </MovieInfo>
    </Movie>
  );
});
