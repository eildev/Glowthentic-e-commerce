import { Icon } from "@iconify/react/dist/iconify.js";
import cn from "../../utils/cn";

const WishlistButton = ({className}) => {
    return (
        <span>
            <Icon icon="proicons:heart"  className={`${cn("bg-secondary rounded-full text-white  p-2 align-middle", className)}`}   height="3.5em" width="3.5em"   />
        </span>
    );
};
export default WishlistButton;