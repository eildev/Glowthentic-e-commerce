import { Icon } from "@iconify/react";
import IncrementDecrement from "../typography/IncrementDecrement";

const CartProductInfoTwo = ({ setItemCount, item, status, handleDelete }) => {
  return (
    <div className="grid">
      <div>
        <IncrementDecrement
          setItemCount={setItemCount}
          item={item}
          status={status}
        />
      </div>
      <button
        onClick={() => handleDelete(item?.id)}
        className="flex items-center gap-2 lg:pt-2 cursor-pointer text-lg lg:text-xl text-[#FF342D]"
      >
        <Icon icon="cuida:trash-outline" />
        <h1 className="text-sm lg:text-base font-medium">Remove</h1>
      </button>
    </div>
  );
};

export default CartProductInfoTwo;
