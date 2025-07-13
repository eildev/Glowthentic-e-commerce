import { Icon } from "@iconify/react";
import IncrementDecrement from "../typography/IncrementDecrement";

const CartProductInfoTwo = ({ setItemCount, item, status, handleDelete }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <IncrementDecrement
          setItemCount={setItemCount}
          item={item}
          status={status}
        />
      </div>
      <button
        onClick={() => handleDelete(item?.id)}
        className="flex items-center gap-2 pt-2 cursor-pointer text-[#FF342D]"
      >
        <Icon icon="cuida:trash-outline" width="24" height="24" />
        <h1 className=" text-base font-medium">Remove</h1>
      </button>
    </div>
  );
};

export default CartProductInfoTwo;
