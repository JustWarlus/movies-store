import { TrendIcon } from "assets";
import { trendsMovies } from "data";
import { Badge } from "./style";
import { memo } from "react";
interface IBadgeRating {
  rating: string;
  movieTitle: string;
}

export const BadgeRating = memo(({ rating, movieTitle }: IBadgeRating) => {
  const isTrend = trendsMovies
    .map((movie) => movie.toLowerCase())
    .includes(movieTitle.toLowerCase());
  return (
    <Badge isTrend={isTrend} rating={+rating}>
      {isTrend && <TrendIcon />}
      {rating}
    </Badge>
  );
});
