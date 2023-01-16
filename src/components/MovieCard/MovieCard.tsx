import { SkeletonMovieCard } from "components/SkeletonMovieCard";
import { Link, useNavigate } from "react-router-dom";
import { PAGE } from "router";
import { useGetMovieByIdQuery } from "services";
import { IMoviePosterAPI } from "types/types";
import { TransformMoviePosters } from "utilits";
import { BadgeRating } from "../BadgeRating";

import { StyledMovieCard, Poster, NameMovie, Categories, CategoryItem } from "./style";

interface IProps {
  movie: IMoviePosterAPI;
}

export const MovieCard = ({ movie }: IProps) => {
  const navigate = useNavigate();
  const { data, isSuccess, isLoading } = useGetMovieByIdQuery(movie.imdbID);

  if (isLoading) {
    return <SkeletonMovieCard />;
  }

  if (isSuccess) {
    const transformMovie = TransformMoviePosters(data);
    return (
      <Link to={`/movie/${transformMovie.imdbID}`}>
        <StyledMovieCard>
          <Poster poster={transformMovie.poster}>
            <BadgeRating rating={transformMovie.imdbRating} />
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
