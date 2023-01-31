import { BurgerMenuIcon } from "assets";
import { StyledBurger } from "./styles";
import { memo } from "react";
interface IProps {
  toggleMenu: () => void;
}

export const BurgerMenu = memo(({ toggleMenu }: IProps) => {
  return (
    <StyledBurger onClick={toggleMenu}>
      <BurgerMenuIcon />
    </StyledBurger>
  );
});
