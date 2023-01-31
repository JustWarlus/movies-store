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
import { memo } from "react";
interface IProps {
  movie: IMoviePosterAPI | IFilter;
}

interface IFilter {
  imdbID: string;
}

export const MovieCard = memo(({ movie }: IProps) => {
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
  const posterBackround =
    poster !== "N/A"
      ? poster
      : "https://pbs.twimg.com/profile_images/1257345412723245056/UtDbBzcJ_400x400.jpg";
  return (
    <Link to={`/movie/${imdbID}`}>
      <StyledMovieCard>
        <Poster $poster={posterBackround}>
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
        <NameMovie
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 1,
          }}
        >
          {title}
        </NameMovie>
        <Categories>
          {genre.map((genre) => {
            return <CategoryItem key={genre}>{genre}</CategoryItem>;
          })}
        </Categories>
      </StyledMovieCard>
    </Link>
  );
});
