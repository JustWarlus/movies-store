import styled from "styled-components";
import { Color, Typography } from "ui";

const Movie = styled.main`
  display: flex;
  gap: 42px;
  overflow: hidden;
`;
const MovieInfo = styled.div``;
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
};
