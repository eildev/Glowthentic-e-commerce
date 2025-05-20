// import { Icon } from "@iconify/react/dist/iconify.js";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import {
//   decrementQuantity,
//   incrementQuantity,
// } from "../../redux/features/slice/cartSlice";
// import toast from "react-hot-toast";
// // import { incrementQuantity, decrementQuantity } from "../../features/cart/cartSlice";

// const IncrementDecrement = ({ setItemCount, item, status, itemCount }) => {
//   const dispatch = useDispatch();
//   const [count, setCount] = useState(item?.quantity || 1);
//   const [count1, setCount1] = useState(1);
//   const maxStock = item?.product_stock?.StockQuantity;

//   useEffect(() => {
//     setCount(item?.quantity || count);
//     setCount1(count1);
//   }, [item?.quantity, count, count1]);

//   const handleIncrement = () => {
//     if (count < maxStock) {
//       dispatch(incrementQuantity(item.id));
//       setCount(count + 1);
//       setItemCount(count + 1);
//     }
//   };

//   const handleDecrement = () => {
//     if (count > 1) {
//       dispatch(decrementQuantity(item.id));
//       setCount(count - 1);
//       setItemCount(count - 1);
//     }
//   };

//   const handleIncrement1 = () => {
//     if (count1 < maxStock) {
//       setCount1(count1 + 1);
//       setItemCount(count1 + 1);
//     }
//   };
//   const handleDecrement1 = () => {
//     if (count1 > 1) {
//       setCount1(count1 - 1);
//       setItemCount(count1 - 1);
//     }
//   };

//   return (
//     <>
//       {status == "details" && (
//         <div className="inline-flex items-center space-x-2 border border-gray-thin p-2 rounded-lg">
//           <span
//             className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
//             onClick={handleDecrement1}
//           >
//             <Icon icon="majesticons:minus" width="15" height="15" />
//           </span>
//           <input
//             className="text-sm text-center font-medium w-7 bg-transparent"
//             value={count1}
//             readOnly
//           />
//           <span
//             className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
//             onClick={handleIncrement1}
//           >
//             <Icon icon="lucide:plus" width="15" height="15" />
//           </span>
//         </div>
//       )}
//       {status == "cart" && (
//         <div className="inline-flex items-center space-x-2 border border-gray-thin p-2 rounded-lg">
//           <span
//             className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
//             onClick={handleDecrement}
//           >
//             <Icon icon="majesticons:minus" width="15" height="15" />
//           </span>
//           <input
//             className="text-sm text-center font-medium w-7 bg-transparent"
//             value={count}
//             readOnly
//           />
//           <span
//             className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
//             onClick={handleIncrement}
//           >
//             <Icon icon="lucide:plus" width="15" height="15" />
//           </span>
//         </div>
//       )}
//     </>
//   );
// };

// export default IncrementDecrement;

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
    <div className="inline-flex items-center space-x-2 border border-gray-thin p-2 rounded-lg">
      {status === "details" && (
        <>
          <button
            type="button"
            className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
            onClick={handleDecrement1}
          >
            <Icon icon="majesticons:minus" width="15" height="15" />
          </button>
          <input
            className="text-sm text-center font-medium w-7 bg-transparent"
            value={count1}
            readOnly
          />
          <button
            type="button"
            className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
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
            className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
            onClick={handleDecrement}
          >
            <Icon icon="majesticons:minus" width="15" height="15" />
          </button>
          <input
            className="text-sm text-center font-medium w-7 bg-transparent"
            value={count}
            readOnly
          />
          <button
            type="button"
            className="cursor-pointer border-2 border-gray-bold rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
            onClick={handleIncrement}
          >
            <Icon icon="lucide:plus" width="15" height="15" />
          </button>
        </>
      )}
    </div>
  );
};

export default IncrementDecrement;
