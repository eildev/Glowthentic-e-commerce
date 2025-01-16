import { configureStore } from "@reduxjs/toolkit";
import productApi from "./features/api/product-api/productApi";

const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware)
});

export default store;