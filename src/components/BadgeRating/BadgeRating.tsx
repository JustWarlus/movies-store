import React from "react";
import { Badge } from "./style";

interface IBadgeRating {
  rating: number;
}

export const BadgeRating = ({ rating }: IBadgeRating) => {
  return <Badge rating={rating}>{rating}</Badge>;
};
