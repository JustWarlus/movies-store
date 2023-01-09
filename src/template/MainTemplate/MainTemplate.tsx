import { Header, Menu } from "../../components";
import { StyledMainTemplate, StyledOutlet, StyledLogo } from "./style";
import { LogoIcon } from "../../assets";
import { PAGE } from "router";

export const MainTemplate = () => {
  return (
    <StyledMainTemplate>
      <StyledLogo to={PAGE.HOME}>
        <LogoIcon />
      </StyledLogo>
      <Menu />
      <Header />
      <StyledOutlet />
    </StyledMainTemplate>
  );
};
