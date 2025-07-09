import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth);
  const location = useLocation();
  const currentPath = location.pathname;

  if (!token) {
    // If user was on 'user-profile' page when logged out, redirect to home
    if (currentPath.includes("user")) {
      return <Navigate to="/" replace />;
    }
    // For other routes, go to login
    return <Navigate to="/login" state={{ from: currentPath }} replace />;
  }

  return children;
};

export default PrivateRoute;
