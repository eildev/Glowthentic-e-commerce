import defaultImage from "../../assets/img/Product/20.png";
import CheckoutItem from "./CheckoutItem";
const Item = ({ carts }) => {
  return (
    <div>
      <div className="space-y-4 max-h-60  overflow-y-scroll  ">
        {carts.map((item) => (
          <CheckoutItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Item;
