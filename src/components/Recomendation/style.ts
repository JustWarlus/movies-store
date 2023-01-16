import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledRecomendation = styled.div`
  margin-top: 56px;
  overflow: hidden;
`;
const Title = styled.h2`
  ${Typography.H3}
  color: ${Color.WHITE}
`;

const MovieList = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 40px;
`;

export { StyledRecomendation, Title, MovieList };
