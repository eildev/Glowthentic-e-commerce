// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
    user: null,
    token: Cookies.get("token") || null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            Cookies.set("token", action.payload.token, { expires: 7 }); // Store token in cookies
        },
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            Cookies.remove("token"); // Remove token from cookies
        },
    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;