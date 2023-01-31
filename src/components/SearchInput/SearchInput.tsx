import { useDebounce, useInput } from "hooks";
import { useNavigate } from "react-router-dom";
import { PAGE } from "router";
import { FilterIcon } from "assets";
import { Input, Search } from "./style";
import { useAppDispatch, changeSearchValue } from "store";
import { memo } from "react";

interface IProps {
  toggleFilters: () => void;
}

export const SearchInput = memo(({ toggleFilters }: IProps) => {
  const search = useInput();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const debouncedValue = useDebounce<string>(search.value, 100);
  const getResultsSearch = () => {
    dispatch(changeSearchValue(debouncedValue));
    navigate(PAGE.SEARH);
  };

  return (
    <Search
      onSubmit={(e) => {
        e.preventDefault();
        getResultsSearch();
      }}
    >
      <Input {...search} placeholder="Search..." />
      <FilterIcon onClick={toggleFilters} />
    </Search>
  );
});
