import { useSelector } from "react-redux";
import OrderCard from "../../../../components/user-profile/OrderCard";
import { useGetOrderInfoQuery } from "../../../../redux/features/api/orderApi/orderGetApi";

const OrderOngoing = () => {
  const { user } = useSelector((state) => state.auth);
  const userID = user?.id;

  console.log("id", userID);

  const { data: order, isLoading : orderLoad, error } = useGetOrderInfoQuery(userID);


  return (
    <div>
      <OrderCard order={order} orderLoad={orderLoad} status="On Delivery" />
    </div>
  );
};

export default OrderOngoing;
