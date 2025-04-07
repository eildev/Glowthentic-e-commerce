import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const ProtectCheckout = ({ children }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const location = useLocation();

  if (cartItems.length === 0) {
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  return children;
};

export default ProtectCheckout;
