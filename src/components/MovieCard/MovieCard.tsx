import React from "react";
import { BadgeRating } from "../BadgeRating";

import { StyledMovieCard, Poster, NameMovie, Categories, CategoryItem } from "./style";

export const MovieCard = () => {
  return (
    <StyledMovieCard>
      <Poster>
        <BadgeRating rating={5.8} />
      </Poster>
      <NameMovie>Название фильма</NameMovie>
      <Categories>
        <CategoryItem>Жанр</CategoryItem>
        <CategoryItem>Жанр</CategoryItem>
        <CategoryItem>Жанр</CategoryItem>
      </Categories>
    </StyledMovieCard>
  );
};
