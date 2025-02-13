import { configureStore } from "@reduxjs/toolkit";
import productApi from "./features/api/product-api/productApi";
// import loadingReducer from './features/slice/loadingSlice';
import authReducer from "./features/slice/authSlice";

const store = configureStore({
    reducer: {
        // app: loadingReducer,
        auth: authReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware)
});

export default store;