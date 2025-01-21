import { Icon } from "@iconify/react/dist/iconify.js";

const OnlineChatButton = () => {
  return (
    <button className=" hidden rounded-lg lg:flex items-center border p-2 m-1 fixed  right-0 bottom-[50px] bg-secondary text-white z-[10] group hover:gap-2 overflow-hidden">
      <span className="font-bold p-[1.5px] ">
        <Icon icon="mdi-light:message-text" width="24" height="24" />
      </span>
      <span className="whitespace-nowrap overflow-hidden max-w-0 transition-[max-width] duration-500 group-hover:max-w-[100px]">
        Online Chat
      </span>
    </button>
 
  );
};

export default OnlineChatButton;
