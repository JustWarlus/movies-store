import styled from "styled-components";
import { Color, Typography } from "ui";

interface IButtom {
  isFavorite?: boolean;
}

const Movie = styled.main`
  width: 100%;
  display: flex;
  gap: 42px;
  overflow: hidden;
`;
const MovieInfo = styled.div`
  width: 100%;
`;
const MovieSidbar = styled.div`
  min-width: 266px;
`;
const Poster = styled.img`
  max-width: 266px;
  max-height: 356px;
  border-radius: 20px;
`;
const Title = styled.h1`
  ${Typography.H1}
  color: ${Color.WHITE}
`;

const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;
const CategoryItem = styled.span`
  ${Typography.SUBLINE_SUB_PRIMARY}
  color: ${Color.LIGHT};
  &:not(:last-child):after {
    content: " • ";
    margin-left: 4px;
  }
`;

const Badges = styled.div`
  margin-top: 26px;
  display: flex;
  gap: 14px;
`;
const BadgeItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 2px 8px;
  box-sizing: border-box;
  border-radius: 6px;
  background: ${Color.GRAPHITE};
  ${Typography.BODYTEXT}
  color: ${Color.WHITE};
`;

const Description = styled.div`
  max-width: 878px;
  margin-top: 40px;
  ${Typography.BODYTEXT}
  color: ${Color.WHITE};
`;

const Table = styled.table`
  margin-top: 20px;
  border-spacing: 0 10px;
`;
const TableRow = styled.tr``;
const TableRowName = styled.th`
  width: 150px;
  padding: 0;
  text-align: left;
  ${Typography.SUBLINE_BUTTON}
  color: ${Color.LIGHT};
`;
const TableRowValue = styled.td`
  padding: 0;
  ${Typography.SUBLINE_SUB_BUTTON}
  color: ${Color.WHITE};
`;

const Buttom = styled.div<IButtom>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  box-sizing: border-box;
  background: ${Color.GRAPHITE};

  svg {
    path {
      fill: ${({ isFavorite }) => (isFavorite ? Color.PRIMARY_MAIN : Color.WHITE)};
    }
  }

  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;

const SubPanel = styled.div`
  max-width: 237px;
  display: flex;
  gap: 2px;
  margin-top: 32px;
  justify-content: space-between;
`;
const TableBody = styled.tbody``;
export {
  Movie,
  Poster,
  Title,
  MovieInfo,
  MovieSidbar,
  Categories,
  CategoryItem,
  Badges,
  BadgeItem,
  Description,
  Table,
  TableRow,
  TableRowName,
  TableRowValue,
  SubPanel,
  Buttom,
  TableBody,
};
