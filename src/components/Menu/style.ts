import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Indents, Typography } from "../../ui";

const StyledMenu = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  position: relative;
  flex: 1;
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
  position: absolute;
  bottom: 0;
  color: ${Color.LIGHT};
  ${Typography.SUBLINE_SUB_PRIMARY}
`;

const LinkText = styled.span``;

export { StyledMenu, Navigation, StyledLink, Copirate, LinkText };
