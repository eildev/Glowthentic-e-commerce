import { configureStore } from "@reduxjs/toolkit";
import productApi from "./features/api/product-api/productApi";
import searchReducer from "./features/slice/searchSlice";
import authReducer from "./features/slice/authSlice";
import subscriptionApi from "./features/api/subscription/subscriptionApi";
import contactUsApi from "./features/api/contactUsApi/contactUsApi";
import authApi from "./features/api/auth/authApi";
import categoryApi from "./features/api/category/categoryApi";

const store = configureStore({
    reducer: {
        search: searchReducer,
        auth: authReducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [subscriptionApi.reducerPath]: subscriptionApi.reducer,
        [contactUsApi.reducerPath]: contactUsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        // category: categoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(categoryApi.middleware)
            .concat(subscriptionApi.middleware)
            .concat(contactUsApi.middleware)
            .concat(authApi.middleware),

});

export default store;