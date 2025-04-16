import { useSelector } from "react-redux";
import OrderCard from "../../../../components/user-profile/OrderCard";
import { useGetOrderHistoryQuery } from "../../../../redux/features/api/orderApi/orderHistoryApi";

const OrderHistory = () => {
  const { user } = useSelector((state) => state.auth);
  const userID = user?.id;

  // console.log("id", userID);

  const {
    data,
    isLoading: historyLoad,
    error,
  } = useGetOrderHistoryQuery(userID);

  console.log(userID);
  // console.log(historyLoad);

  return (
    <div>
      <OrderCard history={data} historyLoad={historyLoad} status={'history'} />
    </div>
  );
};

export default OrderHistory;
