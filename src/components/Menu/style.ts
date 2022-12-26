import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Typography } from "../../ui";

const StyledMenu = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StyledLink = styled(Link)`
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

export { StyledMenu, Navigation, StyledLink, Copirate, LinkText };
