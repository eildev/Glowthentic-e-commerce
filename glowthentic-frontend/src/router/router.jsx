import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../page/home/HomePage";
import AboutPage from "../page/about/AboutPage";
import Blog from "../page/blog/Blog";

// import Login from "../page/login/Login";
import MainLogin from "../page/login/MainLogin";
import SignUp from "../page/sign-up/SignUp";
import ForgetPassword from "../page/forget-password/ForgetPassword";
// import Page404 from "../page/error/Page404";
import AllProductPage from "../page/product/AllProductPage";
import ProductDetails from "../page/product-details/ProductDetails";
import WishlistPage from "../page/wishlist/WishlistPage";
import CartPage from "../page/cart/CartPage";
import CheckoutPage from "../page/checkout/CheckoutPage";
import ContactUs from "../page/contact-us/ContactUs";
import FaqPage from "../page/faq/FaqPage";
import TrackOrderPage from "../page/track-order/TrackOrderPage";
import NewPassword from "../page/new-password/NewPassword";
import PasswordVarification from "../page/password-varification/PasswordVarification";
import AllComponents from "../page/components/AllComponents";
import OrderConfirmation from "../page/orderConfirmation/OrderConfirmation";
import OrdeProgressPage from "../page/track-order/OrdeProgressPage";
import UserProfileLayout from "../page/user-profile/UserProfileLayout";
import EditAccount from "../page/user-profile/profile-section/EditAccount";
import Favorites from "../page/user-profile/profile-section/Favorites";
import Settings from "../page/user-profile/profile-section/Settings";
import OrderProfile from "../page/user-profile/order/OrderProfile";
import OrderOngoing from "../page/user-profile/order/order-section/OrderOngoing";
import OrderHistory from "../page/user-profile/order/order-section/OrderHistory";
import ProfileMenu from "../page/user-profile/ProfileMenu";
import PrivateRoute from "./PrivateRoute";
import Signout from "../page/Signout";
import Login from "../page/login/Login";

// const ErrorBoundary = ({ error }) => {
//   console.error("Error caught:", error);
//   return <Page404 />;
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    // errorElement: <ErrorBoundary />, // Error Boundary
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
        path: "/products",
        element: <AllProductPage />,
      },
      {
        path: "/product/:id", // Dynamic route with :title
        element: <ProductDetails />,
      },
      {
        path: "/products-details", // Dynamic route with :title
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
          <PrivateRoute>
            <CheckoutPage />
          </PrivateRoute>
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
        element: <ProfileMenu />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/user-profile",
        element: (
          <PrivateRoute>
            <UserProfileLayout />
          </PrivateRoute>
        ),
        children: [
          {
            path: "",
            element: <EditAccount />,
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
    path: "/password-varification",
    element: <PasswordVarification />,
  },
]);

export default router;
