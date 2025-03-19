import { useSelector } from "react-redux";
import OrderCard from "../../../../components/user-profile/OrderCard";
import { useGetOrderInfoQuery } from "../../../../redux/features/api/orderApi/orderGetApi";

const OrderOngoing = () => {

  const { user } = useSelector((state) => state.auth);
  const userID = user?.id;

  console.log("id", userID);

  const { data: order, isLoading, error } = useGetOrderInfoQuery(userID);

  console.log("data",order);

  return (
    <div>
      <OrderCard order={order} status="On Delivery" />
    </div>
  );
};

export default OrderOngoing;
