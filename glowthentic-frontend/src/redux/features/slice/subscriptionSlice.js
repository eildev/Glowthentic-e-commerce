import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async action to send subscription request
export const subscribeUser = createAsyncThunk(
  "subscription/subscribeUser",
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/subscribe/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to subscribe");
      }

      return await response.json(); // API should return a success message
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    loading: false,
    success: null,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(subscribeUser.pending, (state) => {
        state.loading = true;
        state.success = null;
        state.error = null;
      })
      .addCase(subscribeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload.message; // API success message
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default subscriptionSlice.reducer;
