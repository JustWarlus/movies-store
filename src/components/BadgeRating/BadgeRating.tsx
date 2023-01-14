import React from "react";
import { Badge } from "./style";

interface IBadgeRating {
  rating: string;
}

export const BadgeRating = ({ rating }: IBadgeRating) => {
  return <Badge rating={+rating}>{rating}</Badge>;
};
