import { LogoIcon } from "assets";
import { BurgerMenu } from "components";
import { useWindowSize } from "hooks";
import { PAGE } from "router";
import { Profile } from "components";
import { SearchInput } from "components";
import { StyledHeader, StyledLogo } from "./style";

interface IProps {
  toggleFilters: () => void;
  toggleMenu: () => void;
}

export const Header = ({ toggleFilters, toggleMenu }: IProps) => {
  const { width = 0 } = useWindowSize();
  return (
    <StyledHeader>
      {width < 900 && (
        <StyledLogo to={PAGE.HOME}>
          <LogoIcon />
        </StyledLogo>
      )}
      <SearchInput toggleFilters={toggleFilters} />
      {width > 900 ? <Profile /> : <BurgerMenu toggleMenu={toggleMenu} />}
    </StyledHeader>
  );
};
