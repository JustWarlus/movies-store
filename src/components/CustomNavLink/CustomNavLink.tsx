import { ReactNode } from "react";
import { useMatch } from "react-router-dom";
import { PAGE } from "router";
import { StyledNavLink } from "./style";
import { memo } from "react";
interface IProps {
  children: ReactNode;
  to: PAGE;
  onClick: () => void;
  className?: string;
}

export const CustomNavLink = memo(({ children, to, onClick, className }: IProps) => {
  const match = useMatch(to);
  return (
    <StyledNavLink onClick={onClick} $isActive={match} to={to} className={className}>
      {children}
    </StyledNavLink>
  );
});
