import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterdProject: [],
  searchKeyword: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addFilter: (state, action) => {
      state.filterdProject.push(action.payload);
    },
    removeFilter: (state, action) => {
      state.filterdProject = state.filterdProject.filter(
        (filter) => filter !== action.payload
      );
    },
    searchByTitle: (state, action) => {
      state.searchKeyword = action.payload;
    },
  },
});

export const { addFilter, removeFilter, searchByTitle } = filterSlice.actions;
export default filterSlice.reducer;
