import { TrendIcon } from "assets";
import { trendsMovies } from "data";
import React from "react";
import { Badge } from "./style";

interface IBadgeRating {
  rating: string;
  movieTitle: string;
}

export const BadgeRating = ({ rating, movieTitle }: IBadgeRating) => {
  const isTrend = trendsMovies
    .map((movie) => movie.toLowerCase())
    .includes(movieTitle.toLowerCase());
  return (
    <Badge isTrend={isTrend} rating={+rating}>
      {isTrend && <TrendIcon />}
      {rating}
    </Badge>
  );
};
