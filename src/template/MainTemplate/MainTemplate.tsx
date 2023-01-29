import { Filters, Header, Menu } from "components";
import { StyledMainTemplate, StyledOutlet, StyledLogo } from "./style";
import { LogoIcon } from "assets";
import { PAGE } from "router";
import { useToggle } from "hooks";
import { useState } from "react";

export const MainTemplate = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const [isFilters, setIsFilters] = useState(false);

  const toggleFilters = () => {
    setIsFilters((isFilters) => !isFilters);
  };

  return (
    <StyledMainTemplate>
      <StyledLogo to={PAGE.HOME}>
        <LogoIcon />
      </StyledLogo>
      <Header toggleFilters={toggleFilters} toggleMenu={toggleMenu} />
      <Menu handleClose={toggleMenu} isMenuOpen={isMenuOpen} />
      <StyledOutlet />
      {isFilters && <Filters toggleFilters={toggleFilters} />}
    </StyledMainTemplate>
  );
};
