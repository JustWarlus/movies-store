import { FavoriteEmpty, MovieList } from "components";
import { useAppSelector } from "store";

export const FavoritesPage = () => {
  const { favoriteMovies } = useAppSelector((state) => state.favorites);
  if (!favoriteMovies.length) {
    return <FavoriteEmpty />;
  } else {
    return <MovieList movies={favoriteMovies} isLoading={false} />;
  }
};
