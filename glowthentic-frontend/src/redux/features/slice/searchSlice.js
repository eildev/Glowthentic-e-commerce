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
      // console.log('state', state);
      // console.log('action', action);

      state.isSuggestionsVisible = action.payload;
    },
  },
});

export const { setQuery, setSuggestionsVisible } = searchSlice.actions;
export default searchSlice.reducer;