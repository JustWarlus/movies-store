import { FavoriteIcon } from "assets";
import { SkeletonMovieCard } from "components/SkeletonMovieCard";
import { Link } from "react-router-dom";
import { useGetMovieByIdQuery } from "services";
import { toggleFavorite } from "store/favorite/favoriteSlice";
import { useAppDispatch, useAppSelector } from "store/hooks/hooks";
import { IMoviePosterAPI } from "types/types";
import { TransformMoviePosters } from "utilits";
import { BadgeRating } from "../BadgeRating";
import {
  StyledMovieCard,
  Poster,
  NameMovie,
  Categories,
  CategoryItem,
  BadgeFavorite,
} from "./style";

interface IProps {
  movie: IMoviePosterAPI;
}

export const MovieCard = ({ movie }: IProps) => {
  const { data, isSuccess, isLoading } = useGetMovieByIdQuery(movie.imdbID);
  const dispatch = useAppDispatch();
  const { favoriteMovies } = useAppSelector((state) => state.favorites);
  const isFavorite = favoriteMovies.find((movieState) => movieState.imdbID === movie.imdbID)
    ? true
    : false;
  const handleAddFavorite = () => {
    dispatch(toggleFavorite(movie));
  };

  if (isLoading) {
    return <SkeletonMovieCard />;
  }

  if (isSuccess) {
    const transformMovie = TransformMoviePosters(data);
    return (
      <Link to={`/movie/${transformMovie.imdbID}`}>
        <StyledMovieCard>
          <Poster poster={transformMovie.poster}>
            <BadgeRating rating={transformMovie.imdbRating} movieTitle={transformMovie.title} />
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
          <NameMovie>{transformMovie.title}</NameMovie>
          <Categories>
            {transformMovie.genre.map((genre) => {
              return <CategoryItem key={genre}>{genre}</CategoryItem>;
            })}
          </Categories>
        </StyledMovieCard>
      </Link>
    );
  }
  return <></>;
};
