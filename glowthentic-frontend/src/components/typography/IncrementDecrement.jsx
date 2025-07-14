import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
} from "../../redux/features/slice/cartSlice";
import toast from "react-hot-toast";

const IncrementDecrement = ({ setItemCount, item, status, itemCount }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item?.quantity || 1);
  const [count1, setCount1] = useState(1);
  const maxStock = item?.product_stock?.StockQuantity;

  useEffect(() => {
    setCount(item?.quantity || count);
    setCount1(count1);
  }, [item?.quantity, count, count1]);

  const handleIncrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (count < maxStock) {
      dispatch(incrementQuantity(item.id));
      setCount(count + 1);
      setItemCount(count + 1);
    } else {
      toast.error("Maximum stock limit reached!");
    }
  };

  const handleDecrement = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (count > 1) {
      dispatch(decrementQuantity(item.id));
      setCount(count - 1);
      setItemCount(count - 1);
    }
  };

  const handleIncrement1 = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (count1 < maxStock) {
      setCount1(count1 + 1);
      setItemCount(count1 + 1);
    } else {
      toast.error("Maximum stock limit reached!");
    }
  };

  const handleDecrement1 = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (count1 > 1) {
      setCount1(count1 - 1);
      setItemCount(count1 - 1);
    }
  };

  return (
    <div className="inline-flex items-center space-x-2 border border-gray-thin rounded-lg">
      {status === "details" && (
        <>
          <button
            type="button"
            className="cursor-pointer border-r bg-gray-200 border-gray-thin text-lg font-thin hover:bg-gray-300 p-2"
            onClick={handleDecrement1}
          >
            <Icon icon="majesticons:minus" width="15" height="15" />
          </button>
          <input
            className="text-sm text-center font-medium bg-transparent outline-none focus:outline-none border-0 focus:border-0 w-6 h-full"
            value={count1}
            readOnly
          />
          <button
            type="button"
            className="cursor-pointer border-l bg-gray-200 border-gray-thin text-lg font-thin hover:bg-gray-300 p-2"
            onClick={handleIncrement1}
          >
            <Icon icon="lucide:plus" width="15" height="15" />
          </button>
        </>
      )}
      {status === "cart" && (
        <>
          <button
            type="button"
            className="cursor-pointer border-r bg-gray-200 border-gray-thin text-sm lg:text-lg font-thin hover:bg-gray-300 p-2"
            onClick={handleDecrement}
          >
            <Icon icon="majesticons:minus" />
          </button>
          <input
            className="text-sm text-center font-medium bg-transparent outline-none focus:outline-none border-0 focus:border-0 w-6 h-full"
            value={count}
            readOnly
          />
          <button
            type="button"
            className="cursor-pointer border-l bg-gray-200 border-gray-thin text-sm lg:text-lg font-thin hover:bg-gray-300 p-2"
            onClick={handleIncrement}
          >
            <Icon icon="lucide:plus" />
          </button>
        </>
      )}
    </div>
  );
};

export default IncrementDecrement;
