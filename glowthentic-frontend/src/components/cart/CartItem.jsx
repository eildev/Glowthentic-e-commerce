import Checkbox from "../typography/Checkbox";
import defaultImage from "../../assets/img/Product/20.png";
import IncrementDecrement from "../typography/IncrementDecrement";
import { useDispatch, useSelector } from "react-redux";
import { toggleItemSelection } from "../../redux/features/slice/selectCartSlice";
import { Icon } from "@iconify/react";
import { imagePath } from "../../utils/imagePath";

const CartItem = ({ item, handleDelete }) => {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.selectCart.selectedItems);
  const isSelected = selectedItems.includes(item.id);

  const handleCheckboxChange = () => {
    dispatch(toggleItemSelection(item.id));
  };

  const image = imagePath(item?.variant_image[0].image);

  return (
    <tr className="border-none">
      <th>
        <Checkbox checked={isSelected} onChange={handleCheckboxChange} />
      </th>
      <td>
        <div className="flex gap-3">
          <div className="avatar">
            <div className="mask rounded-xl h-[64px] w-[62px]">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold mb-1">
              {item?.product?.product_name ?? ""}
            </div>
            <div className="text-[#FA8232] flex items-center gap-2 cursor-pointer">
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.859 4.63978L5.44557 13.5451C5.12789 13.8832 4.82046 14.5493 4.75898 15.0105L4.37981 18.3308C4.24659 19.5298 5.1074 20.3496 6.29614 20.1446L9.59591 19.581C10.0571 19.499 10.7027 19.1608 11.0203 18.8124L19.4338 9.90712C20.8889 8.36996 21.5448 6.61759 19.28 4.47581C17.0255 2.35453 15.3142 3.10261 13.859 4.63978Z"
                  stroke="#FA8232"
                  strokeWidth="1.02477"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.4551 6.125C12.8957 8.95338 15.1912 11.1157 18.0401 11.4026"
                  stroke="#FA8232"
                  strokeWidth="1.02477"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M3.34473 23.4951H21.7907"
                  stroke="#FA8232"
                  strokeWidth="1.02477"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h1 className="font-medium text-base">Edit</h1>
            </div>
          </div>
        </div>
      </td>
      <td className="mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div>
            <IncrementDecrement item={item} />
          </div>
          <div
            onClick={() => handleDelete(item?.id)}
            className="flex items-center gap-2 pt-2 cursor-pointer"
          >
            <Icon
              icon="lets-icons:trash-light"
              className="text-[#FF342D]"
              width="24"
              height="24"
            />
            <h1 className="text-[#FF342D] text-base font-medium">Remove</h1>
          </div>
        </div>
      </td>
      <td className="text-[#191818] flex justify-end font-semibold text-2xl md:absolute mt-2">
        <span>$</span>
        {item.regular_price ?? 0}
      </td>
      <td></td>
    </tr>
  );
};

export default CartItem;
