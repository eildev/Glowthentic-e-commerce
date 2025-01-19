import { Icon } from "@iconify/react";

const ScrollTop = () => {
  return (
    <button className="border-2 p-2 m-1 fixed  right-0 bottom-[200px] bg-white text-primary hover:text-secondary z-[100]">
      <span className="font-bold">
        <Icon icon="mdi-light:arrow-up" width="24" height="24" />
      </span>
    </button>
  );
};

export default ScrollTop;
