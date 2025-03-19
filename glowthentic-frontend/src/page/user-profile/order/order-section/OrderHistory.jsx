import { useSelector } from "react-redux";
import OrderCard from "../../../../components/user-profile/OrderCard";
import { useGetOrderHistoryQuery } from "../../../../redux/features/api/orderApi/orderHistoryApi";

const OrderHistory = () => {
  const { user } = useSelector((state) => state.auth);
  const userID = user?.id;

  console.log("id", userID);

  const { data, isLoading, error } = useGetOrderHistoryQuery(userID);
  console.log("my-history", data);

  return (
    <div>
      <OrderCard history={data} status="done" />
    </div>
  );
};

export default OrderHistory;
