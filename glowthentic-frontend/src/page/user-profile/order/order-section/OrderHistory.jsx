import { useSelector } from "react-redux";
import OrderCard from "../../../../components/user-profile/OrderCard";
import { useGetOrderInfoQuery } from "../../../../redux/features/api/orderApi/orderGetApi";

const OrderHistory = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading: orderLoad, error } = useGetOrderInfoQuery(user?.id);

  const historyData = data?.order?.filter((order) => order.status === "completed");

  console.log("historyData", historyData);

  return (
    <div>
      <OrderCard history={historyData} historyLoad={orderLoad} status={"history"} />
    </div>
  );
};

export default OrderHistory;
