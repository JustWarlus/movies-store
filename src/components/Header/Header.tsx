import React from "react";
import { Profile } from "../Profile";
import { SearchInput } from "../SearchInput";
import { StyledHeader } from "./style";

export const Header = () => {
  return (
    <StyledHeader>
      <SearchInput />
      <Profile />
    </StyledHeader>
  );
};
