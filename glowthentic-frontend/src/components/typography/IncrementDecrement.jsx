import { Icon } from "@iconify/react/dist/iconify.js";
import  { useState } from "react";

const IncrementDecrement = () => {
    const [count, setCount] = useState(1);

    const handleIncrement = () => {
      setCount(count + 1);
    };
  
    const handleDecrement = () => {
      if (count > 1) setCount(count - 1);
    };
    return (
        <div className="inline-flex items-center font-thin space-x-4 border border-gray-thin p-1  rounded-lg">
        <span
          className="cursor-pointer  border-2  border-gray-bold  rounded-md bg-gray-200 text-lg font-thin hover:bg-gray-300"
          onClick={handleDecrement}
        >
         <Icon icon="majesticons:minus" width="1.3em" height="1.3em"  />
        </span>
        <input className="text-lg text-center font-thin w-7" value={count}/>
        <span
          className="cursor-pointer  border-2  border-gray-bold rounded-md  bg-gray-200 text-lg font-thin  hover:bg-gray-300"
          onClick={handleIncrement}
        >
         <Icon icon="lucide:plus" width="1.3em" height="1.3em"   />
        </span>
      </div>
    );
};

export default IncrementDecrement;