import styled from "styled-components";
import { Color, Typography } from "../../ui";

const StyledMenu = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  position: relative;
  flex: 1;
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
`;

const LinkText = styled.span``;

export { StyledMenu, Navigation, Copirate, LinkText };
