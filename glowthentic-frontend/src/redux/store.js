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
import filterReducer from "./features/slice/filterSlice";
import orderReducer from "./features/slice/orderSlice";
import checkoutApi from "./features/api/checkoutApi/checkoutApi";
import wishListApi from "./features/api/wishListApi/wishListApi";
import registerApi from "./features/api/registerApi/registerApi";
import wishlistByUserAPI from "./features/api/wishlistByUserAPI/wishlistByUserAPI";
import homeBannerApi from "./features/api/homeBannerApi/homeBannerApi";
import orderAPI from "./features/api/orderApi/orderApi";
import orderGetApi from "./features/api/orderApi/orderGetApi";
import orderHistoryApi from "./features/api/orderApi/orderHistoryApi";
import featuresApi from "./features/api/featuresApi/featuresApi";
import couponApi from "./features/api/couponApi/couponApi";
import reviewApi from "./features/api/review/reviewApi";
import reviewGetApi from "./features/api/review/reviewGetApi";
import brandApi from "./features/api/brand/brandApi";
import blogApi from "./features/api/blog/blogApi";
import blogCategoryApi from "./features/api/blogCategory/blogCategoryApi";
import userTrackApi from "./features/api/track/userTrackApi";
import blogCommentsApi from "./features/api/blogComments/blogCommentsApi";
import blogCommentsGetApi from "./features/api/blogComments/blogCommentsGetApi";
import blogLikesApi from "./features/api/blogComments/blogLikesApi";
import blogLikesGetApi from "./features/api/blogComments/blogLikesGetApli";

// import orderGetApi from "./features/api/orderApi/orderGetApi";
// import orderHistoryApi from "./features/api/orderApi/orderHistoryApi";
const store = configureStore({
    reducer: {
        // all slice 
        search: searchReducer,
        auth: authReducer,
        cart: cartReducer,
        filters: filterReducer,
        selectCart: selectCartReducer,
        order: orderReducer,

        // all api
        [productApi.reducerPath]: productApi.reducer,
        [categoryApi.reducerPath]: categoryApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [blogCategoryApi.reducerPath]: blogCategoryApi.reducer,
        [brandApi.reducerPath]: brandApi.reducer,
        [offerBannerApi.reducerPath]: offerBannerApi.reducer,
        [tagViewApi.reducerPath]: tagViewApi.reducer,
        [subscriptionApi.reducerPath]: subscriptionApi.reducer,
        [contactUsApi.reducerPath]: contactUsApi.reducer,
        [wishListApi.reducerPath]: wishListApi.reducer,
        [wishlistByUserAPI.reducerPath]: wishlistByUserAPI.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [checkoutApi.reducerPath]: checkoutApi.reducer,
        [registerApi.reducerPath]: registerApi.reducer,
        [blogCommentsApi.reducerPath]: blogCommentsApi.reducer,
        [blogLikesApi.reducerPath]: blogLikesApi.reducer,
        [blogCommentsGetApi.reducerPath]: blogCommentsGetApi.reducer,
        [blogLikesGetApi.reducerPath]: blogLikesGetApi.reducer,
        [orderAPI.reducerPath]: orderAPI.reducer,
        [homeBannerApi.reducerPath]: homeBannerApi.reducer,
        [featuresApi.reducerPath]: featuresApi.reducer,
        [orderGetApi.reducerPath]: orderGetApi.reducer,
        [orderHistoryApi.reducerPath]: orderHistoryApi.reducer,
        [couponApi.reducerPath]: couponApi.reducer,
        [reviewApi.reducerPath]: reviewApi.reducer,
        [reviewGetApi.reducerPath]: reviewGetApi.reducer,
        [userTrackApi.reducerPath]: userTrackApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productApi.middleware)
            .concat(offerBannerApi.middleware)
            .concat(categoryApi.middleware)
            .concat(blogApi.middleware)
            .concat(blogCategoryApi.middleware)
            .concat(brandApi.middleware)
            .concat(tagViewApi.middleware)
            .concat(subscriptionApi.middleware)
            .concat(contactUsApi.middleware)
            .concat(wishListApi.middleware)
            .concat(wishlistByUserAPI.middleware)
            .concat(authApi.middleware)
            .concat(checkoutApi.middleware)
            .concat(registerApi.middleware)
            .concat(blogCommentsApi.middleware)
            .concat(blogLikesApi.middleware)
            .concat(blogCommentsGetApi.middleware)
            .concat(blogLikesGetApi.middleware)
            .concat(orderAPI.middleware)
            .concat(homeBannerApi.middleware)
            .concat(featuresApi.middleware)
            .concat(orderGetApi.middleware)
            .concat(orderHistoryApi.middleware)
            .concat(couponApi.middleware)
            .concat(reviewApi.middleware)
            .concat(reviewGetApi.middleware)
            .concat(userTrackApi.middleware)

});

export default store;