import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../redux/features/slice/cartSlice";
import toast from "react-hot-toast";
// import { incrementQuantity, decrementQuantity } from "../../features/cart/cartSlice";

const IncrementDecrement = ({ setItemCount, item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item?.quantity || 1);

console.log(item?.quantity);
  useEffect(() => {
    setCount(item?.quantity || count); 
  }, [item?.quantity, count]);

  const handleIncrement = () => {
    const maxStock = item?.data?.product_stock?.[0]?.StockQuantity || 1;
  
    if (count < maxStock) {
      dispatch(incrementQuantity(item.id));
      setCount(count + 1);
      setItemCount(count + 1);
    } else {
      toast.error("Maximum stock limit reached");
    }
  };
  

  const handleDecrement = () => {
    if (count > 1) {
      dispatch(decrementQuantity(item.id));
      setCount(count - 1);
      setItemCount(count - 1)
    }
  };

  return (
    <div className="inline-flex items-center space-x-2 border border-gray-thin p-2 rounded-lg">
      <span
        className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
        onClick={handleDecrement}
      >
        <Icon icon="majesticons:minus" width="15" height="15" />
      </span>
      <input
        className="text-sm text-center font-medium w-7 bg-transparent"
        value={count}
        readOnly
      />
      <span
        className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
        onClick={handleIncrement}
      >
        <Icon icon="lucide:plus" width="15" height="15" />
      </span>
    </div>
  );
};

export default IncrementDecrement;
