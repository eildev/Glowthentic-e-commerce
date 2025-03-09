import { configureStore } from "@reduxjs/toolkit";
import productApi from "./features/api/product-api/productApi";
import searchReducer from "./features/slice/searchSlice";
import authReducer from "./features/slice/authSlice";
import subscriptionApi from "./features/api/subscription/subscriptionApi";
import contactUsApi from "./features/api/contactUsApi/contactUsApi";
import authApi from "./features/api/auth/authApi";
import categoryApi from "./features/api/category/categoryApi";
import tagViewApi from "./features/api/tagViewApi/tagViewApi";
import offerBannerApi from "./features/api/offerBanner/offerBanner";
import cartReducer from "./features/slice/cartSlice";
import selectCartReducer from "./features/slice/selectCartSlice";
const store = configureStore({
    reducer: {
        search: searchReducer,
        auth: authReducer,
        cart: cartReducer,
        selectCart: selectCartReducer,
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [offerBannerApi.reducerPath]: offerBannerApi.reducer,
        [tagViewApi.reducerPath]: tagViewApi.reducer,
        [subscriptionApi.reducerPath]: subscriptionApi.reducer,
        [contactUsApi.reducerPath]: contactUsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        // category: categoryReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(offerBannerApi.middleware)
            .concat(categoryApi.middleware)
            .concat(tagViewApi.middleware)
            .concat(subscriptionApi.middleware)
            .concat(contactUsApi.middleware)
            .concat(authApi.middleware),

});

export default store;