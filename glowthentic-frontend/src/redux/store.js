import { configureStore } from "@reduxjs/toolkit";
import productApi from "./features/api/product-api/productApi";
import loadingReducer from './features/slice/loadingSlice';

const store = configureStore({
    reducer: {
        app: loadingReducer,
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware)
});

export default store;