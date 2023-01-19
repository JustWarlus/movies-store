import { useDebounce, useInput } from "hooks";
import { useNavigate } from "react-router-dom";
import { PAGE } from "router";
import { FilterIcon } from "../../assets";
import { Input, Search } from "./style";
import { useAppDispatch } from "store/hooks/hooks";
import { changeSearchValue } from "store/search/searchSlice";

export const SearchInput = () => {
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
      <FilterIcon />
    </Search>
  );
};
