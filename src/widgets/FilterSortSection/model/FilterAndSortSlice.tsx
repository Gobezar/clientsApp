import { createSlice } from "@reduxjs/toolkit";

interface IFIlterAndSortProps {
  displayButtonSearch: boolean;
  openSearch: boolean;
  searchText: string;
  sortMethod: "asc" | "desc" | "";
}

const initialState: IFIlterAndSortProps = {
  displayButtonSearch: true,
  openSearch: false,
  searchText: "",
  sortMethod: "",
};

const FilterAndSortSlice = createSlice({
  name: "filterAndSort",
  initialState,
  reducers: {
    setSearchDisplay(state) {
      state.displayButtonSearch = !state.displayButtonSearch;
      state.openSearch = !state.openSearch;
    },
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
    setSortMethod(state) {
      state.sortMethod = state.sortMethod === "asc" ? "desc" : "asc";
    },
  },
});

export const { setSearchDisplay, setSearchText, setSortMethod } =
  FilterAndSortSlice.actions;
export default FilterAndSortSlice.reducer;
