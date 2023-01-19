import { FavoriteEmpty, MovieList } from "components";
import { useAppSelector } from "store/hooks/hooks";

export const FavoritesPage = () => {
  const { favoriteMovies } = useAppSelector((state) => state.favorites);
  if (!favoriteMovies.length) {
    return <FavoriteEmpty />;
  } else {
    return <MovieList movies={favoriteMovies} isLoading={false} />;
  }
};
