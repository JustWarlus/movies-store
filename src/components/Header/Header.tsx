import { LogoIcon } from "assets";
import { BurgerMenu } from "components";
import { useWindowSize } from "hooks";
import { PAGE } from "router";
import { Profile } from "components";
import { SearchInput } from "components";
import { StyledHeader, StyledLogo } from "./style";
import { memo } from "react";
interface IProps {
  toggleFilters: () => void;
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const Header = memo(({ toggleFilters, toggleMenu, isMenuOpen }: IProps) => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledHeader>
      {width < 900 && (
        <StyledLogo to={PAGE.HOME}>
          <LogoIcon />
        </StyledLogo>
      )}
      <SearchInput toggleFilters={toggleFilters} />
      {width > 900 ? <Profile /> : <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
    </StyledHeader>
  );
});
