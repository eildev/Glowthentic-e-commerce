import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../page/home/HomePage";
import AboutPage from "../page/about/AboutPage";
import Login from "../page/login/Login";
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
        path: "/product/:title", // Dynamic route with :title
        element: <ProductDetails />,
      },
      {
        path: "/wishlist",
        element: <WishlistPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
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
        path: "/components",
        element: <AllComponents />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
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
