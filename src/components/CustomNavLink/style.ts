import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";
import { Color, Indents, Typography } from "ui";

const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<"*"> | null }>`
  ${Indents.LEVEL_4}
  ${Typography.SUBLINE_PRIMARY} 
  display: flex;
  gap: 12px;
  color: ${({ $isActive }) => ($isActive ? `${Color.PRIMARY_MAIN}` : `${Color.SECONDARY}`)};

  svg {
    path {
      fill: ${({ $isActive }) => ($isActive ? `${Color.PRIMARY_MAIN}` : `${Color.SECONDARY}`)};
    }
  }
`;

export { StyledNavLink };
