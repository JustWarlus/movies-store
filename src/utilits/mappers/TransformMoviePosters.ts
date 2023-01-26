import { IMovieInfoAPI, IMoviePoster } from "types/types";

export const transformMoviePosters = (movie: IMovieInfoAPI): IMoviePoster => {
  return {
    poster: movie.Poster,
    title: movie.Title,
    genre: movie.Genre.split(", "),
    imdbID: movie.imdbID,
    imdbRating: movie.imdbRating,
  };
};
