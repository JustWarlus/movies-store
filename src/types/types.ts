export interface IMovieInfoAPI {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: IRatings[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

interface IRatings {
  Source: string;
  Value: string;
}

export interface IMoviePosterAPI {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface IMoviePoster {
  poster: string;
  title: string;
  genre: string[];
  imdbID: string;
  imdbRating: string;
}

export interface IDataMoviePosterApi {
  Response: string;
  Search: IMoviePosterAPI[];
  totalResutlts: string;
}
