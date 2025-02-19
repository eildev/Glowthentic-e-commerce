import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";


const PrivateRoute = ({children}) => {
  const [user, setUser] = useState(true);

  return user ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
