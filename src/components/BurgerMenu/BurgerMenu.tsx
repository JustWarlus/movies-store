import { BurgerMenuIcon, CrossBurgerIcon } from "assets";
import { StyledBurger } from "./styles";
import { memo } from "react";
interface IProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu = memo(({ toggleMenu, isMenuOpen }: IProps) => {
  return (
    <StyledBurger onClick={toggleMenu}>
      {isMenuOpen ? <CrossBurgerIcon /> : <BurgerMenuIcon />}
    </StyledBurger>
  );
});
