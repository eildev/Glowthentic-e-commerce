import { configureStore } from "@reduxjs/toolkit";
import productApi from "./features/api/product-api/productApi";
// import loadingReducer from './features/slice/loadingSlice';
import authReducer from "./features/slice/authSlice";
import subscriptionApi from "./features/api/subscription/subscriptionApi";
import contactUsApi from "./features/api/contactUsApi/contactUsApi";
import authApi from "./features/api/auth/authApi";

const store = configureStore({
    reducer: {
        // app: loadingReducer,
        auth: authReducer,
        [productApi.reducerPath]: productApi.reducer,
        [subscriptionApi.reducerPath]: subscriptionApi.reducer,
        [contactUsApi.reducerPath]: contactUsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(subscriptionApi.middleware)
            .concat(contactUsApi.middleware)
            .concat(contactUsApi.middleware),

});

export default store;