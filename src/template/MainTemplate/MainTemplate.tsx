import { Header, Menu } from "../../components";
import { StyledMainTemplate, StyledOutlet, StyledLogo } from "./style";
import { LogoIcon } from "../../assets";
import { PAGE } from "router";
import { useToggle } from "hooks";

export const MainTemplate = () => {
  const [isMenuOpen, toggleMenu] = useToggle();

  return (
    <StyledMainTemplate>
      <StyledLogo to={PAGE.HOME}>
        <LogoIcon />
      </StyledLogo>
      <Menu handleClose={toggleMenu} />
      <Header />
      <StyledOutlet />
    </StyledMainTemplate>
  );
};
