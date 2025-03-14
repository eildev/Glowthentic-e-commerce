import { Icon } from "@iconify/react/dist/iconify.js";
import cn from "../../utils/cn";
const CartIcon = ({className, iconName}) => {
  return (
    <>
      <span className={`${cn("bg-primary rounded-full text-white p-2 align-middle", className)}`}>
        <Icon icon={iconName} width="24" height="24" />
      </span>
    </>
  );
};

export default CartIcon;
