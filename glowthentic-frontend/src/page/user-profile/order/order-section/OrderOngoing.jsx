import { useSelector } from "react-redux";
import OrderCard from "../../../../components/user-profile/OrderCard";
import { useGetOrderInfoQuery } from "../../../../redux/features/api/orderApi/orderGetApi";

const OrderOngoing = () => {
  const { user } = useSelector((state) => state.auth);
  const userID = user?.id;

  // console.log("id", userID);

  const {
    data,
    isLoading: orderLoad,
    error,
  } = useGetOrderInfoQuery(userID);

// console.log(data?.data[0].order_status == 'Processing');

  return (
    <div>
      <OrderCard order={data} orderLoad={orderLoad} status={'order'} />
    </div>
  );
};

export default OrderOngoing;
