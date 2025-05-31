import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    isSuggestionsVisible: false,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setSuggestionsVisible: (state, action) => {
      state.isSuggestionsVisible = action.payload;
    },
    clearQuery: (state) => {
      state.query = "";
    },
  },
});

export const { setQuery, setSuggestionsVisible, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;