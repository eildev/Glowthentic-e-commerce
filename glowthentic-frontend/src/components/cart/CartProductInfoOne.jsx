import { Icon } from "@iconify/react";
import defaultImage from "../../assets/img/Product/20.png";
import capitalizeText from "../../utils/capitalizeText";
import { imagePath } from "../../utils/imagePath";
import { Link } from "react-router-dom";

const CartProductInfoOne = ({ item }) => {

  return (
    <div className="flex gap-3 relative">
      <div className="avatar">
        <div className="mask rounded-xl h-[100px]">
          <img
            src={imagePath(item?.variant_image[0]?.image) || defaultImage}
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div>
        <div className="font-bold text-sm mb-1">
          {item?.product?.product_name
            ? capitalizeText(item?.product?.product_name)
            : ""}
        </div>
        <div className="text-sm opacity-50 mb-1">
          {item?.variant_name ? capitalizeText(item?.variant_name) : ""}
        </div>
        <Link
          to={`/product/${item?.product?.slug}?variant=${encodeURIComponent(
            item?.variant_name
          )}`}
          className=""
        >
          <div className="text-[#FA8232] flex items-center gap-1 cursor-pointer text-lg lg:text-xl">
            <Icon icon="ix:pen-filled" />
            <span className="text-sm lg:text-base">Edit</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CartProductInfoOne;
