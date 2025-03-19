import { useSelector } from "react-redux";
import OrderCard from "../../../../components/user-profile/OrderCard";
import { useGetOrderHistoryQuery } from "../../../../redux/features/api/orderApi/orderHistoryApi";

const OrderHistory = () => {
  const { user } = useSelector((state) => state.auth);
  const userID = user?.id;

  console.log("id", userID);

  const {
    data: history,
    isLoading: historyLoad,
    error,
  } = useGetOrderHistoryQuery(userID);

  return (
    <div>
      <OrderCard history={history} historyLoad={historyLoad} status="done" />
    </div>
  );
};

export default OrderHistory;
