import { MovieDetails, SkeletonMovieDetails } from "components";
import { useParams } from "react-router-dom";
import { useGetMovieByIdQuery } from "services";
import { useNavigate } from "react-router-dom";
import { PAGE } from "router";

export const MoviePage = () => {
  const navigate = useNavigate();
  const { imbd } = useParams();

  const { data, isSuccess, isLoading } = useGetMovieByIdQuery(imbd);

  if (isLoading) {
    return <SkeletonMovieDetails />;
  }

  if (isSuccess) {
    return <MovieDetails movie={data} />;
  } else {
    navigate(`${PAGE.NOT_FOUND}`);
  }
  return <></>;
};
