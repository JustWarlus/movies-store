import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  searchValue: string;
}

const initialState: IInitialState = {
  searchValue: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeSearchValue: (state, { payload }) => {
      state.searchValue = payload;
    },
  },
});

export default searchSlice.reducer;
export const { changeSearchValue } = searchSlice.actions;
