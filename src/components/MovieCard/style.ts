import styled from "styled-components";
import { Color, Indents, Typography } from "../../ui";

interface IPoster {
  poster: string;
}

interface IFavorite {
  isFavorite: boolean;
}

const BadgeFavorite = styled.div<IFavorite>`
  display: ${({ isFavorite }) => (isFavorite ? "flex" : "none")};
  height: fit-content;
  align-items: center;
  background-color: ${Color.GRAPHITE};
  padding: 4px 10px;
  box-sizing: border-box;
  border-radius: 6px;

  svg {
    path {
      fill: ${({ isFavorite }) => (isFavorite ? Color.PRIMARY_SUB : Color.WHITE)};
    }
  }
`;

const StyledMovieCard = styled.div`
  width: 266px;

  &:hover ${BadgeFavorite} {
    display: flex;
  }
`;
const Poster = styled.div<IPoster>`
  display: flex;
  justify-content: space-between;
  min-width: 266px;
  min-height: 357px;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  ${Indents.LEVEL_6}
  background-image: url(${({ poster }) => poster});
  background-size: cover;
`;
const NameMovie = styled.span`
  display: block;
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.WHITE};
`;
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
`;
const CategoryItem = styled.span`
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.LIGHT};
  &:not(:last-child):after {
    content: " • ";
    margin-left: 4px;
  }
`;

export { StyledMovieCard, Poster, NameMovie, Categories, CategoryItem, BadgeFavorite };
