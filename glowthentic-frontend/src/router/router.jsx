import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../page/home/HomePage";
import AboutPage from "../page/about/AboutPage";
import Blog from "../page/blog/Blog";
import SignUp from "../page/auth/SignUp";
import ForgetPassword from "../page/auth/ForgetPassword";
import Page404 from "../page/error/Page404";
import AllProductPage from "../page/product/AllProductPage";
import ProductDetails from "../page/product-details/ProductDetails";
import WishlistPage from "../page/wishlist/WishlistPage";
import CartPage from "../page/cart/CartPage";
import CheckoutPage from "../page/checkout/CheckoutPage";
import ContactUs from "../page/contact-us/ContactUs";
import FaqPage from "../page/faq/FaqPage";
import TrackOrderPage from "../page/track-order/TrackOrderPage";
import NewPassword from "../page/auth/NewPassword";
import PasswordVarification from "../page/auth/PasswordVerification";
import AllComponents from "../page/components/AllComponents";
import OrderConfirmation from "../page/orderConfirmation/OrderConfirmation";
import OrdeProgressPage from "../page/track-order/OrdeProgressPage";
import UserProfileLayout from "../page/user-profile/UserProfileLayout";
import EditAccount from "../page/user-profile/profile-section/EditAccount";
import OrderProfile from "../page/user-profile/order/OrderProfile";
import OrderOngoing from "../page/user-profile/order/order-section/OrderOngoing";
import OrderHistory from "../page/user-profile/order/order-section/OrderHistory";
import ProfileMenu from "../page/user-profile/ProfileMenu";
import PrivateRoute from "./PrivateRoute";
import Signout from "../page/auth/SignOut";
import Login from "../page/auth/Login";
import TermsAndConditionsPage from "../page/terms-&-conditions/TermsAndConditionsPage";
import PrivacyPolicy from "../page/privacy-policy/PrivacyPolicy";
import ProtectCheckout from "./ProtectCheckout";
import AuthCallback from "../components/auth/AuthCallback";
import ResetPassword from "../page/auth/ResetPassword";

import PasswordChange from "../page/user-profile/profile-section/PasswordChange";

import Favorites from "../page/user-profile/favorite/Favorites";
import Settings from "../page/user-profile/setting/Settings";
import ProfileTab from "../page/user-profile/profile-section/ProfileTab";
import Profile from "../page/user-profile/profile-section/Profile";
import Edit from "../page/user-profile/profile-section/Edit";

const ErrorBoundary = ({ error }) => {
  console.log("Error caught:", error);
  return <Page404 />;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <ErrorBoundary />, // Error Boundary
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <AllProductPage />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <WishlistPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: (
          <ProtectCheckout>
            <CheckoutPage />
          </ProtectCheckout>
        ),
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/faqs",
        element: <FaqPage />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsAndConditionsPage />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/track-order",
        element: <TrackOrderPage />,
      },
      {
        path: "/order-progress",
        element: <OrdeProgressPage></OrdeProgressPage>,
      },
      {
        path: "/components",
        element: <AllComponents />,
      },
      {
        path: "/profile-mobile",
        element: (
          <PrivateRoute>
            <ProfileMenu />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/user",
        element: (
          <PrivateRoute>
            <UserProfileLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <Profile />,
            // children: [
            //   {
            //     path: "",
            //     element: <Profile />,
            //   },
            //   {
            //     path: "edit",
            //     element: <EditAccount />,
            //   },
            //   {
            //     path: "change-password",
            //     element: <PasswordChange />,
            //   },
            // ],
          },
          {
            path: "edit",
            element: <Edit />,
          },
          {
            path: "change-password",
            element: <PasswordChange />,
          },
          {
            path: "favorites",
            element: <Favorites />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
          {
            path: "orders",
            element: <OrderProfile />,
            children: [
              {
                path: "",
                element: <OrderOngoing />,
              },
              {
                path: "history",
                element: <OrderHistory />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signout",
    element: <Signout />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
  },
  {
    path: "/new-password",
    element: <NewPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/password-verification",
    element: <PasswordVarification />,
  },
  {
    path: "/auth/callback",
    element: <AuthCallback />,
  },
]);

export default router;
