import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, Typography } from "../../ui";

const StyledMenu = styled.div`
  display: grid;
  align-content: space-between;
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
  gap: 23px;

  &:active,
  &:hover {
    color: ${Color.PRIMARY_MAIN};
  }
  &:disabled {
    color: ${Color.GRAPHITE};
  }
`;
const Footer = styled.footer``;
const LinkText = styled.span``;

export { StyledMenu, Navigation, StyledLink, Footer, LinkText };
