import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategories: [],
};

const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    addCategory: (state, action) => {
      // Remove the category if already selected to reorder it
      state.selectedCategories = state.selectedCategories.filter(
        (id) => id !== action.payload
      );
      // Add the category to the front (most recent selection first)
      state.selectedCategories.unshift(action.payload);
    },
    removeCategory: (state, action) => {
      state.selectedCategories = state.selectedCategories.filter(
        (id) => id !== action.payload
      );
    },
    clearCategories: (state) => {
      state.selectedCategories = [];
    },
  },
});

export const { addCategory, removeCategory, clearCategories } = categoryFilterSlice.actions;
export default categoryFilterSlice.reducer;
