import { BurgerMenuIcon } from "assets";
import { StyledBurger } from "./styles";

interface IProps {
  toggleMenu: () => void;
}

export const BurgerMenu = ({ toggleMenu }: IProps) => {
  return (
    <StyledBurger onClick={toggleMenu}>
      <BurgerMenuIcon />
    </StyledBurger>
  );
};
