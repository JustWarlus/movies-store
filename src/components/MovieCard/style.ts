import styled from "styled-components";
import { Color, Indents, Typography } from "../../ui";

const StyledMovieCard = styled.div`
  width: 266px;
`;
const Poster = styled.div`
  min-width: 266px;
  min-height: 357px;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  ${Indents.LEVEL_6}
  background-image: url("https://m.media-amazon.com/images/M/MV5BOTk2NDNjZWQtMGY0Mi00YTY2LWE5MzctMGRhZmNlYzljYTg5XkEyXkFqcGdeQXVyMTAyNjg4NjE0._V1_SX300.jpg");
`;
const NameMovie = styled.span`
  display: block;
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.WHITE};
`;
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const CategoryItem = styled.span`
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.LIGHT};
`;

export { StyledMovieCard, Poster, NameMovie, Categories, CategoryItem };
