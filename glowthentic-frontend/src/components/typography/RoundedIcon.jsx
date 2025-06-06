import cn from "../../utils/cn";
import { Icon } from "@iconify/react/dist/iconify.js";
const RoundedIcon = ({ className, iconName, setGetItemId, item }) => {
  return (
    <>
      <span
        className={`${cn(
          "bg-primary rounded-full text-white p-2 align-middle cursor-pointer hover:drop-shadow-sm transition-all duration-300 ease-in-out transform",
          className
        )}`}
onClick={()=>setGetItemId(item.id)}
      >
        <Icon
          icon={iconName}
          width={window.innerWidth >= 1024 ? 24 : 20}
          height={window.innerWidth >= 1024 ? 24 : 20}
        />
      </span>
    </>
  );
};

export default RoundedIcon;
