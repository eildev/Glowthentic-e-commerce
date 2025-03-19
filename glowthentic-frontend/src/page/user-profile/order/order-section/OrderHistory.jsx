import { useSelector } from "react-redux";
import OrderCard from "../../../../components/user-profile/OrderCard";
import { useGetOrderInfoQuery } from "../../../../redux/features/api/orderApi/orderGetApi";

const OrderHistory = () => {

  const { user } = useSelector((state) => state.auth);
  const userID = user?.id;

  console.log("id", userID);

  const { data: history, isLoading, error } = useGetOrderInfoQuery(userID);

  console.log("data", history);




  return (
    <div>
      <OrderCard history={history} status="done" />
    </div>
  );
};

export default OrderHistory;
