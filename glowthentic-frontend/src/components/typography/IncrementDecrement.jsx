import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";

const IncrementDecrement = ({ item, setReFetch, reFetch }) => {
  const [count, setCount] = useState(item?.quantity);
  const [minimumOrderQuantity, setMinimumOrderQuantity] = useState(1); // Default value

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItem = cart.find((cartItem) => cartItem?.id === item?.id);

    if (cartItem && cartItem.minimumOrderQuantity) {
      setMinimumOrderQuantity(cartItem.minimumOrderQuantity);
    }
  }, [item?.id]);

  const updateLocalStorage = (newCount) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: newCount } : cartItem
    );

    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleIncrement = () => {
    if (count < minimumOrderQuantity) {
      const newCount = count + 1;
      setCount(newCount);
      updateLocalStorage(newCount);
      setReFetch(!reFetch)
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      updateLocalStorage(newCount);
      setReFetch(!reFetch)
    }
  };

  return (
    <div className="inline-flex items-center font-thin space-x-4 border border-gray-thin p-1 rounded-lg">
      <span
        className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
        onClick={handleDecrement}
      >
        <Icon icon="majesticons:minus" width="1.3em" height="1.3em" />
      </span>
      <input className="text-lg text-center font-thin w-7" value={count} readOnly />
      <span
        className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
        onClick={handleIncrement}
      >
        <Icon icon="lucide:plus" width="1.3em" height="1.3em" />
      </span>
    </div>
  );
};

export default IncrementDecrement;
