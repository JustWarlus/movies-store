import React from "react";
import { FilterIcon } from "../../assets";
import { Input, Search } from "./style";

export const SearchInput = () => {
  return (
    <Search>
      <Input placeholder="Search..." />
      <FilterIcon />
    </Search>
  );
};
