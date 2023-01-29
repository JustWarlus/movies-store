import { allGenres } from "data";

export const transformGenre = () => {
  return Object.entries(allGenres).map((genre) => {
    return { label: genre[1], value: genre[0] };
  });
};
