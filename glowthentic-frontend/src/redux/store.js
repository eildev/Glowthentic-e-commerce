import { configureStore } from "@reduxjs/toolkit";
import productApi from "./features/api/product-api/productApi";
// import loadingReducer from './features/slice/loadingSlice';
import authReducer from "./features/slice/authSlice";
import subscriptionReducer from "./features/slice/subscriptionSlice";

const store = configureStore({
    reducer: {
        // app: loadingReducer,
        auth: authReducer,
        [productApi.reducerPath]: productApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        subscription: subscriptionReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware)
});

export default store;