import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  searchFilterValue: string;
  isFilter: boolean;
}

const initialState: IInitialState = {
  searchFilterValue: "",
  isFilter: false,
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    changeSearchFilterValue: (state, { payload }) => {
      state.searchFilterValue = payload;
      state.isFilter = true;
    },
    removeFilter: (state) => {
      state.searchFilterValue = "";
      state.isFilter = false;
    },
  },
});

export default searchFilterSlice.reducer;
export const { changeSearchFilterValue, removeFilter } = searchFilterSlice.actions;
