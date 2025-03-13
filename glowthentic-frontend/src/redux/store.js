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
import wishlistReducer from "./features/slice//wishlistSlice";
import filterReducer from "./features/slice/filterSlice";
import checkoutApi from "./features/api/checkoutApi/checkoutApi";
import wishListApi from "./features/api/wishListApi/wishListApi";
import registerApi from "./features/api/registerApi/registerApi";
import userApi from "./features/api/userApi/userApi";
import wishlistByUserAPI from "./features/api/wishlistByUserAPI/wishlistByUserAPI";
const store = configureStore({
    reducer: {
        // all slice 
        search: searchReducer,
        auth: authReducer,
        cart: cartReducer,
        filters: filterReducer,
        selectCart: selectCartReducer,

        // all api
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [offerBannerApi.reducerPath]: offerBannerApi.reducer,
        [tagViewApi.reducerPath]: tagViewApi.reducer,
        [subscriptionApi.reducerPath]: subscriptionApi.reducer,
        [contactUsApi.reducerPath]: contactUsApi.reducer,
        [wishListApi.reducerPath]: wishListApi.reducer,
        [wishlistByUserAPI.reducerPath]: wishlistByUserAPI.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [checkoutApi.reducerPath]: checkoutApi.reducer,
        [registerApi.reducerPath]: registerApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
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
            .concat(wishListApi.middleware)
            .concat(wishlistByUserAPI.middleware)
            .concat(authApi.middleware)
            .concat(checkoutApi.middleware)
            .concat(registerApi.middleware)
            .concat(userApi.middleware),

});

export default store;