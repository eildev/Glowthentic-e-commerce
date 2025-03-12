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
      // console.log(action);
    },
  },
});

export const { setQuery, setSuggestionsVisible } = searchSlice.actions;
export default searchSlice.reducer;