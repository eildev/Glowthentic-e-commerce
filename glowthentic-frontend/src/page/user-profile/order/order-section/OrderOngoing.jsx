import { useSelector } from "react-redux";
import OrderCard from "../../../../components/order/OrderCard";
import { useGetProcessingOrderQuery } from "../../../../redux/features/api/orderApi/orderGetApi";

const OrderOngoing = () => {
  const { user } = useSelector((state) => state.auth);
  const userID = user?.id;

  const {
    data,
    isLoading: orderLoad,
    error,
  } = useGetProcessingOrderQuery(userID);

  return (
    <div className="grid gap-5 mt-5">
      <OrderCard order={data} orderLoad={orderLoad} status={"order"} />
    </div>
  );
};

export default OrderOngoing;
