import Checkbox from "../typography/Checkbox";
import defaultImage from "../../assets/img/Product/20.png";
import IncrementDecrement from "../typography/IncrementDecrement";
import { useDispatch, useSelector } from "react-redux";
import { toggleItemSelection } from "../../redux/features/slice/selectCartSlice";
import { useEffect, useState } from "react";
import { imagePath } from "../../utils/imagePath";
import { Link } from "react-router-dom";

const CartItem = ({ item, handleDelete }) => {
  const regularPrice = item?.regular_price;
  const discountValue = item?.product_variant_promotion?.coupon?.discount_value;
  const discountType = item?.product_variant_promotion?.coupon?.discount_type;

  let finalPrice = regularPrice;

  if (discountType === "fixed") {
    finalPrice = regularPrice - discountValue;
  } else if (discountType === "percentage") {
    finalPrice = regularPrice - (regularPrice * discountValue) / 100;
  }

  // console.log("Main Price:", finalPrice);

  const [itemCount, setItemCount] = useState(item?.quantity || 1);
  const [total, setTotal] = useState(finalPrice * itemCount);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.selectCart.selectedItems);
  const isSelected = selectedItems.includes(item.id);

  const handleCheckboxChange = () => {
    dispatch(toggleItemSelection(item.id));
  };

  useEffect(() => {
    setTotal(finalPrice * itemCount);
  }, [itemCount, finalPrice]);

  return (
    <tr className="border-none">
      <th>
        <Checkbox checked={isSelected} onChange={handleCheckboxChange} />
      </th>
      <td>
        <div className="flex gap-3">
          <div className="avatar">
            <div className="mask rounded-xl h-[64px] w-[62px]">
              <img
                src={imagePath(item?.variant_image[0]?.image)}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold mb-1">
              {item?.product?.product_name ?? ""}
            </div>
            <div className="text-sm opacity-50 mb-1">{item?.variant_name ?? ""}</div>
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
              <Link
                to={`/product/${item?.product?.slug}`}
                className="font-medium text-base"
              >
                Edit
              </Link>
            </div>
          </div>
        </div>
      </td>
      <td className="mx-auto">
        <div className="flex flex-col justify-center items-center">
          <div>
            <IncrementDecrement setItemCount={setItemCount} item={item} status={'cart'}/>
          </div>
          <div
            onClick={() => handleDelete(item?.id)}
            className="flex items-center gap-2 pt-2 cursor-pointer"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.65096 23.1615H15.7996C20.9235 23.1615 22.973 21.112 22.973 15.9881V9.83944C22.973 4.71557 20.9235 2.66602 15.7996 2.66602H9.65096C4.52709 2.66602 2.47754 4.71557 2.47754 9.83944V15.9881C2.47754 21.112 4.52709 23.1615 9.65096 23.1615Z"
                stroke="#FF342D"
                strokeWidth="1.02477"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.7701 9.89091C16.5361 9.66546 14.2816 9.55273 12.0373 9.55273C10.7051 9.55273 9.37289 9.62447 8.05093 9.75769L6.67773 9.89091"
                stroke="#FF342D"
                strokeWidth="1.02477"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.3779 9.21462L10.5214 8.33331C10.6239 7.69795 10.7059 7.21631 11.8434 7.21631H13.606C14.7435 7.21631 14.8254 7.71844 14.9279 8.33331L15.0714 9.20437"
                stroke="#FF342D"
                strokeWidth="1.02477"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.326 9.97266L16.8854 16.7362C16.8136 17.7917 16.7521 18.6115 14.8768 18.6115H10.5625C8.68715 18.6115 8.62566 17.7917 8.55393 16.7362L8.11328 9.97266"
                stroke="#FF342D"
                strokeWidth="1.02477"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="text-[#FF342D] text-base font-medium">Remove</h1>
          </div>
        </div>
      </td>
      {finalPrice === item.regular_price ? (
        <td className="text-[#191818] font-semibold text-2xl pb-12 h-fit text-center">
          ৳{item.regular_price ?? 0}
        </td>
      ) : (
        <td className="text-[#191818] font-semibold h-fit text-center pb-8">
          <span className="block text-2xl">৳{finalPrice ?? 0}</span>
          <del className="block text-sm text-gray-thin mt-2">
            ৳{item.regular_price ?? 0}
          </del>
        </td>
      )}
      <td className="text-[#191818] font-semibold text-2xl pb-12 h-fit text-center">
        ৳{total}
      </td>
    </tr>
  );
};

export default CartItem;

// import Checkbox from "../typography/Checkbox";
// import defaultImage from "../../assets/img/Product/20.png";
// import IncrementDecrement from "../typography/IncrementDecrement";

// const CartItem = ({ item, setReFetch, reFetch, handleDelete }) => {
//     return (
//         <tr className="border-none">
//             <th>
//                 <Checkbox />
//             </th>
//             <td >
//                 <div className="flex   gap-3">
//                     <div className="avatar">
//                         <div className="mask rounded-xl h-[64px] w-[62px]">
//                             <img
//                                 // src={baseURL + item.variant_image[0]?.image || defaultImage}
//                                 src={defaultImage}
//                                 alt="Avatar Tailwind CSS Component"
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <div className="font-bold mb-1">{item?.product_name}</div>
//                         <div className="text-sm opacity-50 mb-1">
//                             United States
//                         </div>
//                         <div className="text-[#FA8232] flex items-center gap-2 cursor-pointer">
//                             <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M13.859 4.63978L5.44557 13.5451C5.12789 13.8832 4.82046 14.5493 4.75898 15.0105L4.37981 18.3308C4.24659 19.5298 5.1074 20.3496 6.29614 20.1446L9.59591 19.581C10.0571 19.499 10.7027 19.1608 11.0203 18.8124L19.4338 9.90712C20.8889 8.36996 21.5448 6.61759 19.28 4.47581C17.0255 2.35453 15.3142 3.10261 13.859 4.63978Z" stroke="#FA8232" strokeWidth="1.02477" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M12.4551 6.125C12.8957 8.95338 15.1912 11.1157 18.0401 11.4026" stroke="#FA8232" strokeWidth="1.02477" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                                 <path d="M3.34473 23.4951H21.7907" stroke="#FA8232" strokeWidth="1.02477" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>

//                             <h1 className="font-medium text-base">Edit</h1>
//                         </div>
//                     </div>
//                 </div>
//             </td>
//             <td className=" mx-auto">
//                 <div className=" border-red-600 flex flex-col justify-center items-center">
//                     <div className="">
//                         <IncrementDecrement item={item} setReFetch={setReFetch} reFetch={reFetch} />
//                     </div>

//                     <div onClick={() => handleDelete(item?.id)} className="flex items-center  gap-2 pt-2 cursor-pointer">
//                         <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M9.65096 23.1615H15.7996C20.9235 23.1615 22.973 21.112 22.973 15.9881V9.83944C22.973 4.71557 20.9235 2.66602 15.7996 2.66602H9.65096C4.52709 2.66602 2.47754 4.71557 2.47754 9.83944V15.9881C2.47754 21.112 4.52709 23.1615 9.65096 23.1615Z" stroke="#FF342D" strokeWidth="1.02477" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M18.7701 9.89091C16.5361 9.66546 14.2816 9.55273 12.0373 9.55273C10.7051 9.55273 9.37289 9.62447 8.05093 9.75769L6.67773 9.89091" stroke="#FF342D" strokeWidth="1.02477" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M10.3779 9.21462L10.5214 8.33331C10.6239 7.69795 10.7059 7.21631 11.8434 7.21631H13.606C14.7435 7.21631 14.8254 7.71844 14.9279 8.33331L15.0714 9.20437" stroke="#FF342D" strokeWidth="1.02477" strokeLinecap="round" strokeLinejoin="round" />
//                             <path d="M17.326 9.97266L16.8854 16.7362C16.8136 17.7917 16.7521 18.6115 14.8768 18.6115H10.5625C8.68715 18.6115 8.62566 17.7917 8.55393 16.7362L8.11328 9.97266" stroke="#FF342D" strokeWidth="1.02477" strokeLinecap="round" strokeLinejoin="round" />
//                         </svg>
//                         <h1 className="text-[#FF342D] text-base font-medium">Remove</h1>
//                     </div>
//                 </div>
//             </td>
//             <td className="text-[#191818] flex justify-end  font-semibold text-2xl md:absolute mt-2">
//                 <span>$</span>{item.variants[0].regular_price}
//             </td>
//             <td>
//             </td>
//         </tr>
//     );
// };

// export default CartItem;
