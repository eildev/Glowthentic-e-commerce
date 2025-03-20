
import Item from "./Item";
import ItemDetails from "./ItemDetails";

const OrderSummary = ({ carts, total, shipingCharge, Shipping, subTotal, tax, discountPrice }) => {


  return (
    <div className=" p-6  text-left rounded-lg">
      <h4 className="text-lg font-medium  mb-4">Order Summary</h4>

      <Item carts={carts}></Item>
      <ItemDetails carts={carts} total={total} shipingCharge={shipingCharge} Shipping={Shipping} subTotal={subTotal} tax={tax} discountPrice={discountPrice}></ItemDetails>
    </div>
  );
};

export default OrderSummary;
