import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import HomePage from "../page/home/HomePage";
import AboutPage from "../page/about/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
    ],
  },
]);

export default router;
