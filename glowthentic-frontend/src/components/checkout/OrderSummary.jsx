
import Item from "./Item";
import ItemDetails from "./ItemDetails";

const OrderSummary = () => {
  return (
    <div className=" p-6  text-left rounded-lg">
      <h4 className="text-lg font-medium  mb-4">Order Summary</h4>
        <Item></Item>
        <ItemDetails></ItemDetails>
    </div>
  );
};

export default OrderSummary;
