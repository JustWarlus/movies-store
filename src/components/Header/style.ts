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

const StyledLogo = styled(Link)`
  svg {
    @media (max-width: 670px) {
      width: 100px;
      display: block;
    }

    @media (max-width: 485px) {
      width: 80px;
    }
  }

  @media (max-width: 385px) {
    position: absolute;
    top: 35px;
  }
`;

export { StyledHeader, StyledLogo };
