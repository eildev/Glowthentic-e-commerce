import { Icon } from "@iconify/react/dist/iconify.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity } from "../../redux/features/slice/cartSlice";
// import { incrementQuantity, decrementQuantity } from "../../features/cart/cartSlice";

const IncrementDecrement = ({ item }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(item?.quantity);

  useEffect(() => {
    setCount(item?.quantity); // Sync local state with Redux state
  }, [item?.quantity]);

  const handleIncrement = () => {
    dispatch(incrementQuantity(item.id));
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      dispatch(decrementQuantity(item.id));
      setCount(count - 1);
    }
  };

  return (
    <div className="inline-flex items-center space-x-2 border border-gray-thin p-2 rounded-lg">
      <span
        className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
        onClick={handleDecrement}
      >
        <Icon icon="majesticons:minus" width="15px" height="15px" />
      </span>
      <input className="text-sm text-center font-medium w-7" value={count} readOnly />
      <span
        className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
        onClick={handleIncrement}
      >
        <Icon icon="lucide:plus" width="15px" height="15px" />
      </span>
    </div>
  );
};

export default IncrementDecrement;




























// import { Icon } from "@iconify/react/dist/iconify.js";
// import { useState, useEffect } from "react";

// const IncrementDecrement = ({ item, setReFetch, reFetch }) => {
//   const [count, setCount] = useState(item?.quantity);
//   const [minimumOrderQuantity, setMinimumOrderQuantity] = useState(1); // Default value

//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const cartItem = cart.find((cartItem) => cartItem?.id === item?.id);

//     if (cartItem && cartItem.minimumOrderQuantity) {
//       setMinimumOrderQuantity(cartItem.minimumOrderQuantity);
//     }
//   }, [item?.id]);

//   const updateLocalStorage = (newCount) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const updatedCart = cart.map((cartItem) =>
//       cartItem.id === item.id ? { ...cartItem, quantity: newCount } : cartItem
//     );

//     localStorage.setItem("cart", JSON.stringify(updatedCart));
//   };

//   const handleIncrement = () => {
//     if (count < minimumOrderQuantity) {
//       const newCount = count + 1;
//       setCount(newCount);
//       updateLocalStorage(newCount);
//       setReFetch(!reFetch)
//     }
//   };

//   const handleDecrement = () => {
//     if (count > 1) {
//       const newCount = count - 1;
//       setCount(newCount);
//       updateLocalStorage(newCount);
//       setReFetch(!reFetch)
//     }
//   };

//   return (
//     <div className="inline-flex items-center space-x-2 border border-gray-thin p-2 rounded-lg">
//       <span
//         className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
//         onClick={handleDecrement}
//       >
//         <Icon icon="majesticons:minus" width="15px" height="15px" />
//       </span>
//       <input className="text-sm text-center font-medium w-7" value={count} readOnly />
//       <span
//         className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
//         onClick={handleIncrement}
//       >
//         <Icon icon="lucide:plus" width="15px" height="15px" />
//       </span>
//     </div>
//   );
// };

// export default IncrementDecrement;
