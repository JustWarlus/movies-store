import { ArrowSliderIcon } from "assets";
import { MovieCard } from "components";
import { movieApi } from "services";
import { IMovieInfoAPI } from "types";
import { StyledRecomendation, Title, MovieList, Button, ControlPanel, Panel } from "./style";
import { useRef, useState } from "react";
import { memo } from "react";
interface IProps {
  movie: IMovieInfoAPI;
}

export const Recomendation = memo(({ movie }: IProps) => {
  const { data, isError } = movieApi.useGetMovieByTitleQuery({
    title: movie.Title.split(" ").at(-1) as string,
  });
  const [isLeftScroll, setIsLeftScroll] = useState(false);
  const [isRightScroll, setIsRightScroll] = useState(true);

  const carousel = useRef<HTMLDivElement>(null);

  const checkForScrollPosition = () => {
    const { current } = carousel;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      setIsLeftScroll(scrollLeft > 0);
      setIsRightScroll(scrollLeft !== scrollWidth - clientWidth);
    }
  };

  const handleRightClick = () => {
    const { current } = carousel;
    if (current) {
      current.scrollLeft += current.offsetWidth / 3;
      checkForScrollPosition();
    }
  };
  const handleLeftClick = () => {
    const { current } = carousel;
    if (current) {
      current.scrollLeft -= current.offsetWidth / 3;
      checkForScrollPosition();
    }
  };

  if (isError || !data) {
    return <></>;
  }

  return (
    <StyledRecomendation>
      <Panel>
        <Title>Recomendation</Title>
        <ControlPanel>
          <Button onClick={handleLeftClick} disabled={!isLeftScroll}>
            <ArrowSliderIcon />
          </Button>
          <Button onClick={handleRightClick} disabled={!isRightScroll}>
            <ArrowSliderIcon />
          </Button>
        </ControlPanel>
      </Panel>
      <MovieList ref={carousel}>
        {data.Search.map((movieItem) => {
          if (movieItem.imdbID !== movie.imdbID) {
            return <MovieCard key={movieItem.imdbID} movie={movieItem} />;
          }
          return <></>;
        })}
      </MovieList>
    </StyledRecomendation>
  );
});
