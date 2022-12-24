import React from "react";
import { LogoIcon } from "../../assets";
import { PAGE } from "../../router";
import { SearchInput } from "../SearchInput";
import { StyledHeader, Controllers, StyledLogo } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo to={PAGE.HOME}>
        <LogoIcon />
      </StyledLogo>
      <Controllers>
        <SearchInput />
      </Controllers>
    </StyledHeader>
  );
};
