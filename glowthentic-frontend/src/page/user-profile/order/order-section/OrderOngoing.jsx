import OrderCard from "../../../../components/user-profile/OrderCard";

const OrderOngoing = () => {
  return (
    <div>
      <OrderCard status="On Delivery" />
      <OrderCard status="On Process" />
      <OrderCard status="On Process" />
    </div>
  );
};

export default OrderOngoing;
