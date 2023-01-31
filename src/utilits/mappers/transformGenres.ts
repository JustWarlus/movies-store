import { allGenres } from "data";

export const transformGenre = () => {
  return Object.entries(allGenres).map((genre) => {
    return { label: genre[0], value: genre[1] };
  });
};
