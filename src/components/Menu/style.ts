import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Indents, Typography } from "../../ui";

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  grid-area: 1 / 1 / 3 / 2;
`;
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;
const StyledLink = styled(Link)`
  ${Indents.LEVEL_4}
  ${Typography.SUBLINE_PRIMARY}
  color: ${Color.SECONDARY};
  display: flex;
  gap: 12px;

  &:active,
  &:hover {
    color: ${Color.PRIMARY_MAIN};
    svg {
      path {
        fill: ${Color.PRIMARY_MAIN};
      }
    }
  }
  &:disabled {
    color: ${Color.GRAPHITE};
  }
`;
const Copirate = styled.footer`
  color: ${Color.LIGHT};
  ${Typography.SUBLINE_SUB_PRIMARY}
`;
const LinkText = styled.span``;

const StyledLogo = styled(Link)`
  margin-top: 8px;
  ${Indents.LEVEL_2}
`;

export { StyledMenu, Navigation, StyledLink, Copirate, LinkText, StyledLogo };
