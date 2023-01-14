import React from "react";
import { Link, generatePath } from "react-router-dom";
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
  const { data, isSuccess } = useGetMovieByIdQuery(movie.imdbID);
  if (isSuccess) {
    const transformMovie = TransformMoviePosters(data);
    return (
      <Link to={generatePath(`${PAGE.MOVIE}`, { imbd: transformMovie.imdbID })}>
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
};
