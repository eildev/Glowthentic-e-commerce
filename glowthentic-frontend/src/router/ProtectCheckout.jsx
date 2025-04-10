import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";


const ProtectCheckout = ({ children }) => {
    const { user } = useSelector(state => state.auth);
  const cartItems = useSelector((state) => state.cart.cartItems);

  
  const filteredCartItems = cartItems.filter(item => {
    if (user?.id) {
      return item.user_id == user.id;
    } else {
      return item.user_id == null;
    }
  });
  
  const location = useLocation();

  if (filteredCartItems.length === 0) {
    return <Navigate to={location.state?.from || "/"} replace />;
  }

  return children;
};

export default ProtectCheckout;
