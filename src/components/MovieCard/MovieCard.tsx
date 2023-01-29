import { FavoriteIcon } from "assets";
import { SkeletonMovieCard } from "components";
import { Link } from "react-router-dom";
import { useGetMovieByIdQuery } from "services";
import { toggleFavorite } from "store";
import { useAppDispatch, useAppSelector } from "store";
import { IMoviePosterAPI, IMovieInfoAPI } from "types";
import { transformMoviePosters } from "utilits";
import { BadgeRating } from "components";
import {
  StyledMovieCard,
  Poster,
  NameMovie,
  Categories,
  CategoryItem,
  BadgeFavorite,
} from "./style";

interface IProps {
  movie: IMoviePosterAPI | IFilter;
}

interface IFilter {
  imdbID: string;
}

export const MovieCard = ({ movie }: IProps) => {
  const { data, isLoading, isError } = useGetMovieByIdQuery(movie.imdbID);
  const dispatch = useAppDispatch();
  const { favoriteMovies } = useAppSelector((state) => state.favorites);
  const isFavorite = Boolean(
    favoriteMovies.find((movieState) => movieState.imdbID === movie.imdbID),
  );

  const handleAddFavorite = () => {
    dispatch(toggleFavorite(movie));
  };

  if (isLoading) {
    return <SkeletonMovieCard />;
  }
  if (isError) {
    return null;
  }

  const transformMovie = transformMoviePosters(data as IMovieInfoAPI);
  const { poster, imdbID, imdbRating, title, genre } = transformMovie;
  return (
    <Link to={`/movie/${imdbID}`}>
      <StyledMovieCard>
        <Poster $poster={poster}>
          {imdbRating !== "N/A" && <BadgeRating rating={imdbRating} movieTitle={title} />}
          <BadgeFavorite
            isFavorite={isFavorite}
            onClick={(e): void => {
              e.preventDefault();
              handleAddFavorite();
            }}
          >
            <FavoriteIcon />
          </BadgeFavorite>
        </Poster>
        <NameMovie>{title}</NameMovie>
        <Categories>
          {genre.map((genre) => {
            return <CategoryItem key={genre}>{genre}</CategoryItem>;
          })}
        </Categories>
      </StyledMovieCard>
    </Link>
  );
};
