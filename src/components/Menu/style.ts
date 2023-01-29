import styled from "styled-components";
import { Color, Typography } from "ui";

interface IMenu {
  $isMenuOpen: boolean;
}

const StyledMenu = styled.div<IMenu>`
  grid-area: 2 / 1 / 3 / 2;
  position: relative;
  flex: 1;

  @media (max-width: 900px) {
    position: absolute;
    right: ${({ $isMenuOpen }) => ($isMenuOpen ? "10px" : "-100%")};
    top: 119px;
    background: ${Color.GRAPHITE};
    padding: 35px 50px;
    border-radius: 15px;
    box-sizing: border-box;
  }
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
`;

const Copirate = styled.footer`
  position: absolute;
  bottom: 0;
  color: ${Color.LIGHT};
  ${Typography.SUBLINE_SUB_PRIMARY}
  @media (max-width: 900px) {
    visibility: hidden;
  }
`;

const LinkText = styled.span``;

export { StyledMenu, Navigation, Copirate, LinkText };
