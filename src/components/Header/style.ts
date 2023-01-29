import { Link } from "react-router-dom";
import styled from "styled-components";
import { Indents } from "ui";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 41px;
  ${Indents.LEVEL_2}
  grid-area: 1 / 2 / 2 / 3;

  @media (max-width: 900px) {
    grid-area: 1 / 1 / 2 / 2;
    align-items: center;
    gap: 25px;
  }
`;

const StyledLogo = styled(Link)``;

export { StyledHeader, StyledLogo };
