import { useSelector } from "react-redux";
import OrderCard from "../../../../components/order/OrderCard";
import { useGetOrderInfoQuery } from "../../../../redux/features/api/orderApi/orderGetApi";

const OrderHistory = () => {
  const { user } = useSelector((state) => state.auth);
  const { data, isLoading: orderLoad, error, refetch } = useGetOrderInfoQuery(user?.id);

  const historyData = data?.order?.filter(
    (order) => order.status === "completed"
  );

  // console.log("historyData", historyData);

  return (
    <div className="grid gap-5 mt-5">
      <OrderCard
        history={historyData}
        historyLoad={orderLoad}
        status={"history"}
        refetch={refetch}
      />
    </div>
  );
};

export default OrderHistory;
