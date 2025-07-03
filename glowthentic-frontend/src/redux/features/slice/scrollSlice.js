import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
    name: 'scroll',
    initialState: {
        shouldScrollToTop: false
    },
    reducers: {
        triggerScrollToTop: (state) => {
            state.shouldScrollToTop = true;
        },
        resetScrollTrigger: (state) => {
            state.shouldScrollToTop = false;
        },
    }
})

export const { triggerScrollToTop, resetScrollTrigger } = scrollSlice.actions;
export default scrollSlice.reducer;