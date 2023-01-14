// import axios from "axios";
// import { IMoviePoster } from "types/types";

// const collectionNames = [
//   "The Lord of the Rings",
//   "The Matrix",
//   "Back to the Future",
//   "The Hunger Games",
//   "The Maze Runner",
//   "Kingsman",
//   "X-Men",
//   "John Wick",
//   "Mad Max",
//   "Indiana",
//   "Aliens",
//   "Predator",
//   "Planet of the Apes",
//   "Die Hard",
//   "Terminator",
// ];

export const randomCoolectionMovies = 145;
// = (): IMoviePoster[] => {
//   const randomMovies: IMoviePoster[] = [];

//   while (randomMovies.length <= 10) {
//     const randomCollection =
//       collectionNames[Math.floor(Math.random() * (collectionNames.length - 1)) + 1];

//     axios.get(`https://www.omdbapi.com/?2fa1535f?s=${randomCollection}`).then((res) => {
//       const movies = res.data;
//       const { imdbID } = movies[Math.floor(Math.random() * 9) + 1];

//       axios.get(`https://www.omdbapi.com/?2fa1535f?t=${imdbID}`).then((res) => {
//         const movie = res.data;
//         randomMovies.push({
//           poster: movie.Poster,
//           title: movie.Title,
//           genre: movie.Genre.split(", "),
//           imdbID: movie.imdbID,
//         });
//       });
//     });
//   }
//   return randomMovies;
// };
