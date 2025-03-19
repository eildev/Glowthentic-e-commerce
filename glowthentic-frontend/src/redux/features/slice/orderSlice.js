import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orderData: null,
    loading: false,
    error: null,
  },
  reducers: {
    setOrderData(state, action) {
      state.orderData = action.payload;
      state.loading = false;
      state.error = null;
    },
    setLoading(state) {
      state.loading = true;
    },
    setError(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setOrderData, setLoading, setError } = orderSlice.actions;
export default orderSlice.reducer;